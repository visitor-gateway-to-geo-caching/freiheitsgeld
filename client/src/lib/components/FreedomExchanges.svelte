<script>
	import { onMount } from 'svelte';
	import { connectToBlockchain, getTextWithoutLink } from '$lib/helpers.js';
	import hashJs from 'hash.js';
	import { ethers } from 'ethers';
	import { FP, fTABI, FC, FT, fCABI, fPABI, vPeriodMinLength } from '../../constants';
	import MapOfExchanges from './MapOfExchanges.svelte';
	export let texts;
	let visitorIsConnectedViaBrowserWallet = false;
	let visitorHasBrowserWallet = false;
	let publicWalletAddressOfVisitor = '';
	let provider;
	let contract;
	let dataLoaded = false;
	let released = false;
	let enrichedExchanges = [];
	let visitorInformed = true;
	let freedomActDescription = '';
	let fTContract;
	let amount;
	let donationAmount;
	let showMap = false;

	async function getFreedomExchanges(contract) {
		const numberOfActs = await contract.freedomExchangeCounter();
		let counter = 0;
		const result = [];
		while (counter < numberOfActs) {
			counter++;
			let exchangeRaw = await contract.freedomExchanges(counter);
			const from = exchangeRaw[0];
			const location = ethers.decodeBytes32String(exchangeRaw[1]);
			const description = exchangeRaw[2];
			const splitted = location.split('œ');
			const baseTreasury = { from, lat: splitted[0], lon: splitted[1], text: description };
			result.push(baseTreasury);
		}
		return result;
	}
	onMount(async () => {
		if (typeof window.ethereum === 'undefined') {
			visitorHasBrowserWallet = false;
		} else {
			try {
				visitorHasBrowserWallet = true;
				const connectionData = await connectToBlockchain();
				provider = connectionData.provider;
				publicWalletAddressOfVisitor = connectionData.publicWalletAddressOfVisitor;
				const signer = await provider.getSigner();
				contract = new ethers.Contract(FP, fPABI, signer);
				fTContract = new ethers.Contract(FT, fTABI, signer);
				const baseTreasuries = await getFreedomExchanges(contract);
				for (const baseTreasury of baseTreasuries) {
					let enrichedExchange = {};
					enrichedExchange.from = baseTreasury.from;
					enrichedExchange.lat = baseTreasury.lat;
					enrichedExchange.lon = baseTreasury.lon;
					enrichedExchange.description = baseTreasury.text;
					let startIndex = enrichedExchange.description.indexOf('https://rumble.com/embed/');
					if (startIndex !== -1) {
						const rest = enrichedExchange.description.substr(
							startIndex,
							enrichedExchange.description.length
						);
						console.log(rest);
						const endIndex = rest.indexOf(' ');
						const rumbleLink = enrichedExchange.description.substr(startIndex, endIndex);
						console.log(rumbleLink);
						if (endIndex === -1) {
							enrichedExchange.embedLink = rest;
						} else {
							enrichedExchange.embedLink = rest.substr(0, endIndex);
						}
					}
					enrichedExchange.reconciliationFrom = 0;
					enrichedExchange.hash =
						'0x' + hashJs.sha256().update(enrichedExchange.description).digest('hex');
					if (await fTContract.isRegistered(enrichedExchange.hash)) {
						enrichedExchange.registered = true;
						const assetRaw = await fTContract.assets(enrichedExchange.hash);
						enrichedExchange.upVoteScore = ethers.formatEther(assetRaw[0]);
						enrichedExchange.downVoteScore = ethers.formatEther(assetRaw[1]);
						enrichedExchange.reconciliationFrom = assetRaw[2];
						enrichedExchange.reconciled = assetRaw[3];
					} else {
						enrichedExchange.registered = false;
					}
					enrichedExchanges.push(enrichedExchange);
				}
				visitorIsConnectedViaBrowserWallet = true;
			} catch (error) {
				console.log(error.message);
			}
		}
		dataLoaded = true;
	});

	async function register(description) {
		const hash = '0x' + hashJs.sha256().update(description).digest('hex');
		await fTContract.addAsset(hash, vPeriodMinLength);
	}
	function cleanDesk() {
		visitorInformed = true;
		freedomActDescription = '';
	}
	async function donate(receiver) {
		const amountToBeBoughtInWei = ethers.parseEther(donationAmount.toString());
		const signer = await provider.getSigner();
		const fCContract = new ethers.Contract(FC, fCABI, signer);
		const buyPrice = await fCContract.getBuyPrice(amountToBeBoughtInWei);
		const cost = BigInt(donationAmount) * buyPrice;

		alert(`donating ${donationAmount} to ${receiver} at ${buyPrice} costing ${cost}`);
		await contract.donate(receiver, amountToBeBoughtInWei, buyPrice, { value: cost });
	}
	async function vote(description, up) {
		const amountToBeBoughtInWei = ethers.parseEther(amount.toString());
		const signer = await provider.getSigner();
		const fCContract = new ethers.Contract(FC, fCABI, signer);
		const buyPrice = await fCContract.getBuyPrice(amountToBeBoughtInWei);
		const cost = BigInt(amount) * buyPrice;
		const ethInWallet = BigInt(await provider.getBalance(publicWalletAddressOfVisitor));
		const hash = '0x' + hashJs.sha256().update(description).digest('hex');
		console.log(`${hash} ${amountToBeBoughtInWei} ${buyPrice} ${cost}`);
		try {
			const estimatedGas = await fTContract.appreciateAsset.estimateGas(
				hash,
				amountToBeBoughtInWei,
				buyPrice,
				{
					value: BigInt(cost)
				}
			);
			const estimatedGasCost = estimatedGas * (await provider.getFeeData()).gasPrice;
			if (ethInWallet < cost + BigInt(estimatedGasCost)) {
				throw new Error('you might enter a smaller amount');
			} else {
				if (up) {
					console.log(hash, amountToBeBoughtInWei, buyPrice);
					await fTContract.appreciateAsset(hash, amountToBeBoughtInWei, buyPrice, {
						value: BigInt(cost)
					});
				} else {
					await fTContract.depreciateAsset(hash, amountToBeBoughtInWei, buyPrice, {
						value: BigInt(cost)
					});
				}
				visitorInformed = false;
			}
		} catch (error) {
			alert(error);
		}
	}
</script>

{#if dataLoaded && released}
	<p><br /></p>
	<MapOfExchanges exchanges={enrichedExchanges} {contract} {texts}></MapOfExchanges>
	<p><br /></p>

	{#each enrichedExchanges as enrichedExchange}
		<div class="card {enrichedExchange.reconciled ? 'reconciled' : 'open'}">
			<p><br /></p>

			{#if enrichedExchange.embedLink}
				{getTextWithoutLink(enrichedExchange.description, enrichedExchange.embedLink)}
				<p><br /></p>
				<div class="embedVideo">
					<object title="super" data={`${enrichedExchange.embedLink}`}> </object>
				</div>
			{:else}
				{enrichedExchange.description}
			{/if}
			<p><br /></p>
			<button on:click={() => (showMap = !showMap)}>Show On Map</button>
			<p><br /></p>
			{#if showMap}
				<div class="specificMap">
					<MapOfExchanges height={200} exchanges={[enrichedExchange]} {contract} {texts}
					></MapOfExchanges>
				</div>
				<p><br /></p>
			{/if}

			{#if enrichedExchange.registered}
				<span class="score-up">Ups: {enrichedExchange.upVoteScore} </span> vs.
				<span class="score-down">Downs: {enrichedExchange.downVoteScore} </span>
				{#if enrichedExchange.reconciled}
					<p><br /></p>
					<input
						bind:value={donationAmount}
						class="myInputField"
						type="number"
						placeholder="... enter donation amount ..."
						min="1"
						max="369"
						step="1"
					/>
					{#if donationAmount > 0}
						<p><br /></p>
						<button class="inside" on:click={() => donate(enrichedExchange.from)}>Donate</button>
					{/if}
				{:else}
					<p><br /></p>
					<input
						bind:value={amount}
						class="myInputField"
						type="number"
						placeholder="... enter investment amount ..."
						min="1"
						max="369"
						step="1"
					/>
					{#if amount > 0}
						<p><br /></p>
						<button class="inside" on:click={() => vote(enrichedExchange.description, true)}
							>Appreciate</button
						>
						<p><br /></p>
						<button class="inside" on:click={() => vote(enrichedExchange.description, false)}
							>Depreciate</button
						>
						<p><br /></p>
					{/if}
					{#if !enrichedExchange.reconciled && enrichedExchange.reconciliationFrom < new Date().getTime() / 1000 && amount == undefined && (enrichedExchange.upVoteScore > 0 || enrichedExchange.downVoteScore > 0)}
						<p><br /></p>
						<button class="inside" on:click={() => fTContract.reconcile(enrichedExchange.hash)}
							>Reconcile</button
						>
					{/if}
				{/if}
			{:else}
				<p><br /></p>
				<button class="inside" on:click={() => register(enrichedExchange.description)}
					>Register</button
				>
			{/if}
			<p><br /></p>
		</div>
	{/each}
{:else}
	<p><br /></p>
	{@html texts.releaseAnnouncement}
{/if}

<style>
	.embedVideo {
		position: relative;
		padding-bottom: 56.25%; /* 16:9, for an aspect ratio of 1:1 change to this value to 100% */
	}
	object {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.reconciled {
		background-color: #dddddd;
	}
	.score-up {
		background-color: green;
		color: white;
		min-width: 80px;
		width: 80px;
		padding-left: 18px;
		padding-right: 18px;
	}
	.score-down {
		background-color: red;
		color: white;
		padding-left: 9px;
		padding-right: 9px;
	}

	.card {
		margin-bottom: 9vh;
		border: 1px solid black;
		text-align: center;
		padding: 8px;
	}
</style>
