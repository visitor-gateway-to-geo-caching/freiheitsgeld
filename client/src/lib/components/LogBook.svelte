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

<p><br /></p>

Du kannst unsere Währungen per bei 
<a href="https://app.uniswap.org/swap" target="_blank">uniswap</a>
kaufen und verkaufen. <br>Dazu brauchst Du die jeweilige Smart Contract Adresse: 
<p><br></p>
<a href="https://polygonscan.com/token/0xb841a4f979f9510760ecf60512e038656e68f459" target="_blank"
	>Freiheit</a
>: 0xb841A4f979F9510760ecf60512e038656E68f459
<p><br /></p>
<br>
<a href="https://polygonscan.com/token/0xb841a4f979f9510760ecf60512e038656e68f459" target="_blank"
	>Friede</a
>: 0xb841A4f979F9510760ecf60512e038656E68f459
<p><br /></p>
<br>
<a href="https://polygonscan.com/token/0xb841a4f979f9510760ecf60512e038656e68f459" target="_blank"
	>Geo Cash</a
>: 0xb841A4f979F9510760ecf60512e038656E68f459
<p><br /></p>



{#if visitorIsConnectedViaBrowserWallet}
	<embed src="https://freedomlog.de" width="100%" height="810" />
	<p><br /></p>
{/if}

<style>
</style>
