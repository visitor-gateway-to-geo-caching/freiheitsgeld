<script>
	import { onMount } from 'svelte';
	import FeedbackToVisitor from './FeedbackToVisitor.svelte';
	import { ethers } from 'ethers';
	import { FC } from '../../constants';
	export let contract;
	export let provider;
	export let texts;
	export let publicWalletAddressOfVisitor;
	let amount = 9;
	let sellPrice = 0;
	let balanceOfVisitorWallet = 0;
	let visitorInformed = true;
	let underway
	let ethBalanceSC

	onMount(async () => {
		underway = await contract.getUnderway();
		ethBalanceSC = await provider.getBalance(FC);

		sellPrice = await contract.getSellPrice(ethBalanceSC, underway);
		balanceOfVisitorWallet = await contract.balanceOf(publicWalletAddressOfVisitor);
	});
	async function sellFreedomCash() {
		if (amount % 9 !== 0) { alert("a multiple of 9 please")}
		if (amount > Number(ethers.formatEther(balanceOfVisitorWallet))) {
			alert(texts.smallerAmount);
		} else {
			underway = await contract.getUnderway();
			ethBalanceSC = await provider.getBalance(FC);
			sellPrice = await contract.getSellPrice(ethBalanceSC, underway);

			console.log(`sellPrice ${sellPrice}`);
			try {
				let result = await contract.sellFreedomCash(ethers.parseEther(amount.toString()));
				visitorInformed = false;
				console.log(`result: ${result}`);
			} catch (error) {
				if (error.info.error.code !== 4001) {
					alert(error.message);
				}
			}
		}
	}
</script>

<section class="text-center">
	{#if balanceOfVisitorWallet > 0}
		<p><br /></p>
		{#if visitorInformed}
			{texts.investment3}
			<p><br /></p>

			<input
				bind:value={amount}
				class="myInputField"
				type="number"
				placeholder="... enter amount ..."
			/>
			<p><br /></p>

			{#if amount > 0}
				<button class="inside" on:click={() => sellFreedomCash()}>{texts.sell}</button>
			{/if}
		{:else}
			<FeedbackToVisitor
				{texts}
				on:clickedOK={() => {
					visitorInformed = true;
				}}
			></FeedbackToVisitor>
		{/if}
		<p><br /></p>
	{/if}
</section>

<style>
</style>
