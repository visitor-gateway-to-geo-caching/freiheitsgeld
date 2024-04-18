<script>
	// import Seo from '$lib/components/Seo.svelte';
	import { onMount } from 'svelte';
	import { getTexts } from '$lib/helpers';
	import FreedomCash from '$components/FreedomCash.svelte';
	let texts = {};
	let ready = false;
	onMount(async () => {
		texts = getTexts();
		ready = true;
	});
</script>
<h2 class="text-center">{texts.title}</h2>

<main>
	{#if ready}
		<FreedomCash {texts}></FreedomCash>
	{/if}
</main>

<style>
</style>
