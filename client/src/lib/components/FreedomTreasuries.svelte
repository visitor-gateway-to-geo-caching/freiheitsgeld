<script>
	import { onMount } from 'svelte';
	import { connectToBlockchain, getTextWithoutLink } from '$lib/helpers.js';
	import hashJs from 'hash.js';
	import { ethers } from 'ethers';
	import MapOfTreasuries from './MapOfTreasuries.svelte';
	import { FT, fTABI, FC, fCABI, FP, fPABI, vPeriodMinLength } from '../../constants';

	let visitorIsConnectedViaBrowserWallet = false;
	let visitorHasBrowserWallet = false;
	let publicWalletAddressOfVisitor = '';
	let provider;
	let contract;
	let dataLoaded = false;
	let enrichedTreasuries = [];
	let visitorInformed = true;
	let freedomActDescription = '';
	let fTContract;
	let amount;
	let donationAmount;
	let showMap = false;

	async function getFreedomTreasuries(contract) {
		const numberOfTreasuries = await contract.freedomTreasuryCounter();
		let counter = 0;
		const result = [];
		while (counter < numberOfTreasuries) {
			counter++;
			let treasuryRaw = await contract.freedomTreasuries(counter);
			const from = treasuryRaw[0];
			const location = ethers.decodeBytes32String(treasuryRaw[1]);
			const guestBookEntry = ethers.decodeBytes32String(treasuryRaw[2]);
			const splitted = location.split('œ');
			const baseTreasury = { from, lat: splitted[0], lon: splitted[1], text: guestBookEntry };
			result.push(baseTreasury);
		}
		return result;
	}
	onMount(async () => {
		if (typeof window.ethereum === 'undefined') {
			visitorHasBrowserWallet = false;
		} else {
			visitorHasBrowserWallet = true;
			const connectionData = await connectToBlockchain();
			provider = connectionData.provider;
			publicWalletAddressOfVisitor = connectionData.publicWalletAddressOfVisitor;
			const signer = await provider.getSigner();
			contract = new ethers.Contract(FP, fPABI, signer);
			fTContract = new ethers.Contract(FT, fTABI, signer);
			const baseTreasuries = await getFreedomTreasuries(contract);

			for (const baseTreasury of baseTreasuries) {
				let enrichedTreasury = {};
				enrichedTreasury.from = baseTreasury.from;
				enrichedTreasury.lat = baseTreasury.lat;
				enrichedTreasury.lon = baseTreasury.lon;
				enrichedTreasury.description = baseTreasury.text;
				enrichedTreasury.embedLink = `https://rumble.com/embed/${enrichedTreasury.description}`;
				enrichedTreasury.hash =
					'0x' + hashJs.sha256().update(enrichedTreasury.description).digest('hex');
				if (await fTContract.isRegistered(enrichedTreasury.hash)) {
					enrichedTreasury.registered = true;
					const assetRaw = await fTContract.assets(enrichedTreasury.hash);
					enrichedTreasury.upVoteScore = ethers.formatEther(assetRaw[0]);
					enrichedTreasury.downVoteScore = ethers.formatEther(assetRaw[1]);
					enrichedTreasury.reconciliationFrom = ethers.formatEther(assetRaw[2]);
					enrichedTreasury.reconciled = assetRaw[3];
				} else {
					enrichedTreasury.registered = false;
				}
				enrichedTreasuries.push(enrichedTreasury);
			}
			dataLoaded = true;
			visitorIsConnectedViaBrowserWallet = true;
		}
	});

	async function register(description) {
		// const hash = await fTContract.getHash(description);
		const hash = '0x' + hashJs.sha256().update(description).digest('hex');
		await fTContract.addAsset(hash, vPeriodMinLength);
	}
	function cleanDesk() {
		visitorInformed = true;
		freedomActDescription = '';
	}
	async function donate(receiver) {
		alert(`donating ${donationAmount} to ${receiver}`);
		const amountToBeBoughtInWei = ethers.parseEther(donationAmount.toString());
		const signer = await provider.getSigner();
		const fCContract = new ethers.Contract(FC, fCABI, signer);
		const balance = await provider.getBalance(FC);
		const price = await fCContract.getBuyPrice(balance);
		const cost = BigInt(donationAmount) * price;
		await fCContract.buyFreedomCash(receiver, amountToBeBoughtInWei, { value: cost });
		visitorInformed = false;
	}
	async function vote(description, up) {
		const amountToBeBoughtInWei = ethers.parseEther(amount.toString());
		const signer = await provider.getSigner();
		const fCContract = new ethers.Contract(FC, fCABI, signer);
		const balance = await provider.getBalance(FC);
		const price = await fCContract.getBuyPrice(amountToBeBoughtInWei);
		const cost = BigInt(amount) * price;
		const ethInWallet = BigInt(await provider.getBalance(publicWalletAddressOfVisitor));
		// const hash = await fTContract.getHash(description);
		const hash = '0x' + hashJs.sha256().update(description).digest('hex');
		console.log(`${hash} ${amountToBeBoughtInWei} ${price} ${cost}`);
		try {
			const estimatedGas = await fTContract.appreciateAsset.estimateGas(
				hash,
				amountToBeBoughtInWei,
				{
					value: BigInt(cost)
				}
			);
			const estimatedGasCost = estimatedGas * (await provider.getFeeData()).gasPrice;
			if (ethInWallet < cost + BigInt(estimatedGasCost)) {
				throw new Error('you might enter a smaller amount');
			} else {
				if (up) {
					console.log(hash, amountToBeBoughtInWei, price);
					await fTContract.appreciateAsset(hash, amountToBeBoughtInWei, {
						value: BigInt(cost)
					});
				} else {
					await fTContract.depreciateAsset(hash, amountToBeBoughtInWei, {
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

Erschaffe <a href="https://rumble.com/c/c-5722872/videos" target="_blank">Schätze der Freiheit</a> und mach die Erde zu einem freien Planeten. <p><br></p> Generiere und platziere <a href="https://freiheitsgeld.de/freedomWallets" target="_blank">Freiheitsgeldbeutel</a> an beliebigen schönen Orten. <p><br></p>Speichere Hinweis Videos bei <a href="https://rumble.com" target="_blank">rumble.com</a>.
<p><br /><br /></p>
{#if dataLoaded}
	<MapOfTreasuries treasuries={enrichedTreasuries}></MapOfTreasuries>
	<p><br /></p>
	{#each enrichedTreasuries as enrichedTreasury}
		<div class="card {enrichedTreasury.reconciled ? 'reconciled' : 'open'}">
			<p><br /></p>
			{#if enrichedTreasury.embedLink}
				{getTextWithoutLink(enrichedTreasury.description, enrichedTreasury.embedLink)}
				<p><br /></p>
				<div class="embedVideo">
					<object title="super" data={`${enrichedTreasury.embedLink}`}> </object>
				</div>
			{:else}
				{enrichedTreasury.description}
			{/if}
			<p><br /></p>
			<button on:click={() => (showMap = !showMap)}>Show On Map</button>
			<p><br /></p>
			{#if showMap}
				<div class="specificMap">
					<MapOfTreasuries height={200} treasuries={[enrichedTreasury]}></MapOfTreasuries>
				</div>
				<p><br /></p>
			{/if}

			{#if enrichedTreasury.registered}
				<span class="score-up">Ups: {enrichedTreasury.upVoteScore} </span> vs.
				<span class="score-down">Downs: {enrichedTreasury.downVoteScore} </span>
				{#if enrichedTreasury.reconciled}
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
						<button class="inside" on:click={() => donate(enrichedTreasury.from)}>Donate</button>
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
						<button class="inside" on:click={() => vote(enrichedTreasury.description, true)}
							>Appreciate</button
						>
						<p><br /></p>
						<button class="inside" on:click={() => vote(enrichedTreasury.description, false)}
							>Depreciate</button
						>
						<p><br /></p>
					{/if}
					{#if !enrichedTreasury.reconciled && enrichedTreasury.reconciliationFrom < new Date().getTime() / 1000 && amount == undefined && (enrichedTreasury.upVoteScore > 0 || enrichedTreasury.downVoteScore > 0)}
						<p><br /></p>
						<button class="inside" on:click={() => fTContract.reconcile(enrichedTreasury.hash)}
							>Reconcile</button
						>
					{/if}
				{/if}
			{:else}
				<p><br /></p>
				<button class="inside" on:click={() => register(enrichedTreasury.description)}
					>Register</button
				>
			{/if}
			<p><br /></p>
		</div>
	{/each}
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
