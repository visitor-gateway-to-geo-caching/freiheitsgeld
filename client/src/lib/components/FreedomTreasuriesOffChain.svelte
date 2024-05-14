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

Bitte generiere auch Du <a href="{window.location}/freedomWallets" target="_blank"
	>Freiheitsgeldbeutel</a
>.

<p><br /></p>
Transferiere dann eine kleine Menge Deiner
<a
	href="https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368"
	target="_blank"
>
	Freiheit Coins
</a>,
<a
	href="https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c"
	target="_blank"
>
	Friede Coins
</a>
oder
<a href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">
	Geo Cash Coins
</a>
auf die zusätzlich von Dir generierten Freiheitsgeldbeutel.

<p><br /></p>
Schenke diese dann befüllten Freiheitsgeldbeutel weiter an freiheitsliebende, friedliebende Menschen,
die jeden Menschen mit Respekt behandeln.
<p><br /><br /></p>
{#if dataLoaded}
	<MapOfTreasuries treasuries={enrichedTreasuries} offchain={true}></MapOfTreasuries>
{/if}

<p><br /></p>

Du kannst Deine Freiheitsgeldbeutel auch einfach irgendwo verstecken.
<p><br /></p>
Du kannst diese Verstecke als Geo Caching Rätsel
<a href="https://rumble.com/c/c-5722872/videos" target="_blank">per Video</a> oder durch Klick auf
die obige Karte öffentlich machen.
<p><br /></p>
Du kannst Deine Verstecke natürlich auch einfach für Dich behalten.
<p><br /><br><br></p>
<div class="videoDiff">
	<object
		height="450vh"
		title="some of the first ..."
		data="https://rumble.com/embed/v4oc2ar/?pub=3blg3u"
	>
	</object>
</div>

<p><br /><br><br></p>
<a href="https://rumble.com/c/c-6145166" target="_blank">
	<button>Mehr Geiler Scheiß</button>
</a>

<p><br /><br><br></p>
<a href="https://privacy-is-not-a-crime.de" target="_blank" data-svelte-h="svelte-mwxuuu"
	>Privatsphäre ist kein Verbrechen</a
>.

<style>
	object {
		width: 36vw;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
	}
</style>
