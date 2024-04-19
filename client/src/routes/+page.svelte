<script>
	// import Seo from '$lib/components/Seo.svelte';
	import FreedomCash from '$components/FreedomCash.svelte';
	import { germanTexts } from '$lib/helpers';

	let texts = germanTexts;
</script>

<h2 class="text-center">{texts.title}</h2>

<main>
	<FreedomCash {texts}></FreedomCash>
</main>

<style>
</style>
