<script>
	import { ethers } from 'ethers';
	import { onMount } from 'svelte';
	import FeedbackToVisitor from './FeedbackToVisitor.svelte';
	import { FC } from '../../constants';

	export let contract;
	export let provider;
	export let publicWalletAddressOfVisitor;
	export let texts;
	
	let amountToBeBought = 2718;
	let etherAmountAvailable = 0;
	let visitorInformed = true;
	let ready = false;

	onMount(async () => {
		etherAmountAvailable = await provider.getBalance(publicWalletAddressOfVisitor);
		ready = true;
	});
	async function buyFreedomCash() {
		if (amountToBeBought % 9 !== 0) { alert("a multiple of 9 please")}
		const amountToBeBoughtInWei = ethers.parseEther(amountToBeBought.toString());
        let underway = await contract.getUnderway()
        let ethBalanceSC = await provider.getBalance(FC)
        const price = await contract.getBuyPrice(ethBalanceSC, underway)
		const cost = BigInt(amountToBeBought) * price;

		console.log(ethers.formatEther(cost));
		console.log(publicWalletAddressOfVisitor);

		const ethInWallet = BigInt(await provider.getBalance(publicWalletAddressOfVisitor));
		try {
			const estimatedGas = await contract.buyFreedomCash.estimateGas(
				publicWalletAddressOfVisitor,
				amountToBeBoughtInWei,
				{
					value: BigInt(cost)
				}
			);
			const estimatedGasCost = estimatedGas * (await provider.getFeeData()).gasPrice;
			if (ethInWallet < cost + BigInt(estimatedGasCost)) {
				alert(texts.smallerAmount);
			} else {
				try {
					console.log(`calling with ${publicWalletAddressOfVisitor} ${amountToBeBoughtInWei} ${cost}`)
					let result = await contract.buyFreedomCash(
						publicWalletAddressOfVisitor,
						amountToBeBoughtInWei,
						{
							value: BigInt(cost)
						}
					);
					visitorInformed = false;
					console.log(result);
				} catch (error) {
					alert(texts.smallerAmount);
				}
			}
		} catch (error) {
			alert(texts.smallerAmount);
			console.log(error);
		}
	}
</script>

{#if ready}
	{#if visitorInformed}
		{#if etherAmountAvailable > 0}
			{texts.investment2}
			<p><br /></p>
			<input
				bind:value={amountToBeBought}
				class="myInputField"
				type="number"
				placeholder="min: 9 max: 2718"
				min="9"
				max="2718"
				step="9"
			/>
			<p><br /></p>
			{#if amountToBeBought > 0}
				<button class="inside" on:click={() => buyFreedomCash()}>{texts.buy}</button>
			{/if}
		{:else}
			{@html texts.buyPr}
			<p><br /></p>
			{@html texts.transfer}
			<p><br /></p>
		{/if}
	{:else}
		<FeedbackToVisitor {texts} on:clickedOK={() => (visitorInformed = true)}></FeedbackToVisitor>
	{/if}
{/if}

<style>
</style>
