<script>
	import Seo from '$components/Seo.svelte';
	import Philosophy from '$components/Philosophy.svelte';
</script>

<Seo title="Freedom Philosophy" />

<div class="text-center content">
	<h2>Philosophie</h2>
	<Philosophy></Philosophy>
</div>
<p><br /></p>

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
