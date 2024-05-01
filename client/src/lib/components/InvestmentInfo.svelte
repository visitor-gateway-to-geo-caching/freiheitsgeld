<script lang="ts">
	import { onMount } from 'svelte';
	import { connectToBlockchain } from '$lib/helpers';
	export let texts;
	export let visitorWithMobile;
	let provider;
	let contract;
	let publicWalletAddressOfVisitor = '';

	let visitorIsConnectedViaBrowserWallet = false;
	let visitorHasBrowserWallet = false;

	onMount(async () => {
		if (typeof window.ethereum === 'undefined') {
			visitorHasBrowserWallet = false;
		} else {
			visitorHasBrowserWallet = true;
			if (publicWalletAddressOfVisitor === '') {
				const connectionData = await connectToBlockchain();
				provider = connectionData.provider;
				contract = connectionData.contract;
				publicWalletAddressOfVisitor = connectionData.publicWalletAddressOfVisitor;
			}
			visitorIsConnectedViaBrowserWallet = true;
		}
	});
</script>

{#if !visitorHasBrowserWallet && !visitorWithMobile}
	{@html texts.useBW}
	<p><br /></p>
{:else if !visitorHasBrowserWallet && visitorWithMobile}
	{@html texts.useBIB}
	<p><br /></p>
{/if}
{#if visitorIsConnectedViaBrowserWallet}
	<div class="content">
		You can buy and sell Geo Cash via <a href="https://app.uniswap.org/swap" target="_blank"
			>uniswap</a
		>.
		<p><br /></p>
		Please do not invest big amounts so that Geo Cash emerges as a decentralized freedom currency.
	</div>
	<embed src="https://geld-wandern.de" width="100%" height="810" />
	<p><br /></p>
{/if}

<style>
</style>
