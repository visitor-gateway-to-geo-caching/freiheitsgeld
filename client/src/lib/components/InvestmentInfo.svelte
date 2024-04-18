<script lang="ts">
	import BlockChainData from './BlockChainData.svelte';
	import SellFreedomCash from '$components/SellFreedomCash.svelte';
	import InvestIntoFreedomCash from '$components/InvestIntoFreedomCash.svelte';
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
		<p><br /></p>
		<InvestIntoFreedomCash {contract} {publicWalletAddressOfVisitor} {provider} {texts}
		></InvestIntoFreedomCash>
		<p><br /></p>
		<SellFreedomCash {contract} {texts} {publicWalletAddressOfVisitor} {provider}></SellFreedomCash>
		<p><br /></p>
		<!-- <div class="center">
			<img class="explanatoryImage" src="/smart-contract.png" alt="" />
		</div>
		<p><br /><br /></p> -->
		<BlockChainData {publicWalletAddressOfVisitor} {contract} {provider} {texts}></BlockChainData>
	</div>
{/if}

<style>
</style>
