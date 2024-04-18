<script>
	import FreedomExchanges from '$components/FreedomExchanges.svelte';
	import { onMount } from 'svelte';
	import { getTexts } from '$lib/helpers';
	let texts = {};
	let visitorHasBrowserWallet = false;
	let advanced = false;
	onMount(async () => {
		texts = getTexts();
		if (typeof window.ethereum === 'undefined') {
			visitorHasBrowserWallet = false;
		} else {
			visitorHasBrowserWallet = true;
		}
	});
</script>

<div class="text-center content">
	<h2>{texts.exchanges}</h2>
	{texts.exchanges1}
	<p><br></p>
	{@html texts.exchanges2}
	{#if visitorHasBrowserWallet && advanced}
		<FreedomExchanges {texts}></FreedomExchanges>
	{:else}
		<!-- tbd -->
	{/if}
	<p><br></p>
</div>

<style>
	@media only screen and (min-width: 800px) {
		.content {
			width: 63%;
			margin-left: auto;
			margin-right: auto;
			padding: 0;
			text-align: center;
		}
	}
</style>