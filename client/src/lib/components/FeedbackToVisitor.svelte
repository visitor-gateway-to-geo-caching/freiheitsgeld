<script>
	import { replaceContentToShowClickableLinks } from '$lib/helpers.js';
	import { createEventDispatcher } from 'svelte';

	export let texts;
	export let message = '';

	const dispatch = createEventDispatcher();
</script>

{@html texts.congrats}
<p><br /></p>
{#if message != ''}
{@html replaceContentToShowClickableLinks(message)}
<p><br /></p>
{/if}
{@html texts.reload}
<p><br /></p>
<button class="button inside" on:click={() => dispatch('clickedOK')}>O.K.</button>
<p><br /></p>

<style>
</style>
