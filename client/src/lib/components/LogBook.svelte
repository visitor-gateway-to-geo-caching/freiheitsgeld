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

	<embed src="https://freedomlog.de" width="100%" height="810" />
	<p><br /></p>
{/if}

<style>
</style>
