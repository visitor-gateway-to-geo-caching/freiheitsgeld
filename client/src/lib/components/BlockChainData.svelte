<script>
	import { onMount } from 'svelte';
	import { ethers } from 'ethers';
	import { FC, baseURLScan } from '../../constants.ts';
	export let contract;
	export let publicWalletAddressOfVisitor;
	export let provider;
	export let texts;
	let amountOfCoinsInVisitorsWallet;
	let readyForDisplay = false;
	let buyPrice;
	let sellPrice;
	let amountOfETHInSmartContract;

	onMount(async () => {
		loadData();
	});

	async function loadData() {
		const visitorBalance = await contract.balanceOf(publicWalletAddressOfVisitor);
		amountOfCoinsInVisitorsWallet = ethers.formatEther(visitorBalance);

		// let underway = await contract.getUnderway();
		// let ethBalanceSC = await provider.getBalance(FC);
		// const rawBuyPrice = await contract.getBuyPrice(ethBalanceSC, underway);

		// buyPrice = ethers.formatUnits(rawBuyPrice.toString(), 'ether');
		// try {
		// 	const rawSellPrice = await contract.getSellPrice(ethBalanceSC, underway);
		// 	sellPrice = ethers.formatUnits(rawSellPrice.toString(), 'ether');
		// } catch (error) {
		// 	console.log(error.message);
		// }

		amountOfETHInSmartContract = ethers.formatUnits(
			(await provider.getBalance(FC)).toString(),
			'ether'
		);
		readyForDisplay = true;
	}
</script>

{#if readyForDisplay}
	{@html texts.investment1}
	<p><br /><br /></p>
	<div class="tableDiv">
		<table>
			<tr>
				<th>Key</th>
				<th>Value</th>
			</tr>
			<tr>
				<td>Connected Wallet</td>
				<td class="longInfo">{publicWalletAddressOfVisitor}</td>
			</tr>
			<tr>
				<td>Wallet Balance</td>
				<td
					>{amountOfCoinsInVisitorsWallet}
					<a href="{baseURLScan}token/{FC}#code#L891" target="_blank">Freedom Cash</a></td
				>
			</tr>
			<!-- <tr>
				<td>Buy Price</td>
				<td>{buyPrice} Matic</td>
			</tr>
			<tr>
				<td>Guaranteed Minimum Sell Price</td>
				<td>{sellPrice} Matic</td>
			</tr>
			<tr>
				<td>Market Capitalization (according to contract)</td>
				<td>{amountOfETHInSmartContract} Matic</td>
			</tr> -->
			<tr>
				<td>Holders According to Polygon</td>
				<td><a href="{baseURLScan}token/{FC}#balances" target="_blank">Holders</a></td>
			</tr>
			<tr>
				<td>Smart Contract Address</td>
				<td class="longInfo"><a href="{baseURLScan}token/{FC}#code" target="_blank">{FC}</a></td>
			</tr>
		</table>
	</div>
{:else}
	{@html texts.loading}
{/if}

<style>
	.tableDiv {
		overflow-x: scroll;
	}
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	td,
	th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	tr:nth-child(even) {
		background-color: #dddddd;
	}
</style>
