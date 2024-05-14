<script>
	import Seo from '$lib/components/Seo.svelte';
	import FreedomTreasuries from '$lib/components/FreedomTreasuries.svelte';
	import FreedomTreasuriesOffChain from '$lib/components/FreedomTreasuriesOffChain.svelte';
	import { onMount } from 'svelte';
	let ready = false;
	let advanced = false;
	let visitorHasBrowserWallet;

	onMount(async () => {
		if (typeof window.ethereum === 'undefined') {
			visitorHasBrowserWallet = false;
		} else {
			visitorHasBrowserWallet = true;
		}
		ready = true;
	});
</script>

<Seo title="Freedom Treasuries" />
<div class="text-center">
	{#if ready}
		<h2>Schatzkammern der Freiheit</h2>
		<div class="content">
			{#if visitorHasBrowserWallet && advanced}
				<FreedomTreasuries></FreedomTreasuries>
			{:else}
				<FreedomTreasuriesOffChain></FreedomTreasuriesOffChain>
				<p><br /></p>
				<!-- <button class="inside" on:click={() => (advanced = !advanced)}>{texts.switchToOnChainMode}</button> -->
			{/if}
		</div>
	{/if}
	<p><br /></p>
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
