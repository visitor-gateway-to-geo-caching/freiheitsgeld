<script lang="ts">
	import { onMount } from 'svelte';
	import { connectToBlockchain } from '$lib/helpers';

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
<p><br></p>Bitte installiere ein vertrauenswürdiges Browserwallet wie beispielsweise <a href="https://metamask.io" target="_blank">metamask.io</a> oder nutze das im <a href="https://brave.com" target="_blank">brave.com</a> Browser eingebaute Wallet.
	<p><br /></p>
{:else if !visitorHasBrowserWallet && visitorWithMobile}
	Da es sich bei dieser Seite um eine verteilte Web App (dApp) handelt, besuche diese Seite bitte mit dem in der <a href="https://metamask.io" target="_blank">Metamask App</a> eingebauten Browser.
	<p><br /></p>
{/if}



{#if visitorIsConnectedViaBrowserWallet}
	<embed src="https://freedomlog.de" width="100%" height="810" />
	<p><br /></p>
{/if}

<style>
</style>
