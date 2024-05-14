<script>
	import Seo from '$lib/components/Seo.svelte';
	import FreedomWallets from '$lib/components/FreedomWallets.svelte';
</script>

<Seo title="Freedom Wallets" />
<div class="text-center content">
	<h2>Geldbeutel der Freiheit</h2>
 	<FreedomWallets></FreedomWallets>
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