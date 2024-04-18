<script>
	import { onMount } from 'svelte';
	import { offChainTreasuries } from '../../off-chain-data.ts';
	import { getRandomEntries } from '$lib/helpers';

	export let menu;
	export let displayAmount

	let displayedFirstTreasuries = [];
	let displayedFirstExchanges = [];
	let ready;

	onMount(() => {
		displayedFirstTreasuries = getRandomEntries(offChainTreasuries, displayAmount);
		// displayedFirstExchanges = getRandomEntries(firstFreedomExchangesEmbedLinks, displayAmount); will be released later
		ready = true;
	});

</script>

{#if ready}
	{#if menu === 'treasuries'}
		<div class="grid-container">
			{#each displayedFirstTreasuries as entry}
				<div class="item1">
					<object width="100%" title="some of the first ..." data={entry.txt}> </object>
				</div>
			{/each}
		</div>
	{:else if menu === 'exchanges'}
		<div class="grid-container">
			{#each displayedFirstExchanges as entry}
				<div class="item1">
					<object width="100%" title="some of the first ..." data={entry}> </object>
				</div>
			{/each}
		</div>
	{/if}
{/if}

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
