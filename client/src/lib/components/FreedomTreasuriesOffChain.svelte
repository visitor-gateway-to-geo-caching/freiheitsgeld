<script>
	import { onMount } from 'svelte';
	import { offChainTreasuries } from '../../off-chain-data';
	import MapOfTreasuries from './MapOfTreasuries.svelte';

	let dataLoaded = false;
	let enrichedTreasuries = [];

	onMount(async () => {
		const baseTreasuries = offChainTreasuries;
		for (const baseTreasury of baseTreasuries) {
			let enrichedTreasury = {};
			enrichedTreasury.from = baseTreasury.from;
			enrichedTreasury.lat = baseTreasury.lat;
			enrichedTreasury.lon = baseTreasury.lon;
			enrichedTreasury.description = baseTreasury.txt;
			enrichedTreasury.registered = false;
			enrichedTreasuries.push(enrichedTreasury);
		}
		dataLoaded = true;
	});
</script>

Schatzkammern der Freiheit
<p><br /><br /></p>
{#if dataLoaded}
	<MapOfTreasuries treasuries={enrichedTreasuries} offchain={true}></MapOfTreasuries>
{/if}
