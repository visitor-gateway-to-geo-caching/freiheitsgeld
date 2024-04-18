<script>
	import FreedomEnterprise from '$components/FreedomEnterprise.svelte';
	import Seo from '$lib/components/Seo.svelte';
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

<Seo title="Freedom Enterprise" />

<div class="text-center content">
	<h2>{texts.enterprise}</h2>
	<p><br></p>
	{@html texts.enterprise1}
	<p><br></p>
	{#if visitorHasBrowserWallet && advanced}
		<FreedomEnterprise {texts}></FreedomEnterprise>
	{:else}
		<!-- tbd -->
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