<script>
	import { onMount } from 'svelte';
	import { offChainTreasuries } from '../../off-chain-data.ts';
	import { getRandomEntries } from '$lib/helpers';

	export let displayAmount;

	let displayedFirstTreasuries = [];
	let ready;

	onMount(() => {
		displayedFirstTreasuries = getRandomEntries(offChainTreasuries, displayAmount);
		ready = true;
	});
</script>

{#if ready}
	<div class="grid-container">
		{#each displayedFirstTreasuries as entry}
			<div class="item1">
				<object width="100%" title="some of the first ..." data={entry.txt}> </object>
			</div>
		{/each}
	</div>
{/if}
<p><br /></p>
<a href="https://rumble.com/c/c-5722872" target="_blank">
	<button>Mehr Videos</button>
</a>

<style>
	.grid-container {
		display: grid;
		grid: 150px / auto auto auto;
		grid-gap: 10px;
		background-color: #3d6daf;
		padding: 10px;
	}

	.grid-container > div {
		text-align: center;
		padding: 0px 0;
		font-size: 30px;
	}
</style>
