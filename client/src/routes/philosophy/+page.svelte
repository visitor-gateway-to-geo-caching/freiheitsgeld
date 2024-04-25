<script>
	import Seo from '$components/Seo.svelte';
	import Philosophy from '$components/Philosophy.svelte';
	import { germanTexts } from '$lib/helpers';

	let texts = germanTexts;
</script>

<Seo title="Freedom Philosophy" />

<div class="text-center content">
	<h2>{texts.philosophy}</h2>
	<Philosophy {texts}></Philosophy>
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
