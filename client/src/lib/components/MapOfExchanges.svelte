<script>
	// @ts-nocheck due to leaflet --> window is not defined... check app.html
	import { onMount } from 'svelte';
	import { ethers } from 'ethers';
	import FeedbackToVisitor from './FeedbackToVisitor.svelte';
	import { replaceContentToShowClickableLinks } from '$lib/helpers.js';

	export let exchanges = [];
	export let contract;
	export let width = 100;
	export let height = 400;
	let visitorInformed = true;
	let map;
	let markerIcon;
	let markers = [];
	let readyForDisplay = false;
	let markerInConstruction;
	let newHint = {};
	let newMap;
	onMount(async () => {
		//alert(exchanges)
	});
	function createMap(container) {
		if (exchanges.length === 1) {
			newMap = L.map(container).setView([exchanges[0].lat, exchanges[0].lon], 6);
		} else {
			newMap = L.map(container).setView([47.365365, 8.541248], 3);
		}

		markerIcon = L.icon({
			iconUrl:
				'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
			iconAnchor: [12.5, 41]
		});
		L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
      &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
			subdomains: 'abcd',
			maxZoom: 20
		}).addTo(newMap);

		return newMap;
	}
	function mapAction(container) {
		map = createMap(container);

		for (const freedomExchange of exchanges) {
			const newMarker = L.marker([freedomExchange.lat, freedomExchange.lon], { icon: markerIcon })
				.bindPopup(replaceContentToShowClickableLinks(freedomExchange.description))
				.addTo(map);
			newMarker.on('mouseover', function (ev) {
				newMarker.openPopup();
			});
			newMarker.on('click', function (ev) {
				newMarker.openPopup();
			});
			markers.push(newMarker);
		}
		map.on('click', function (e) {
			closeAllMarkerPopups();
			newHint.lat = Math.round((e.latlng.lat + Number.EPSILON) * 1000000) / 1000000;
			newHint.lon = Math.round((e.latlng.lng + Number.EPSILON) * 1000000) / 1000000;
			if (markerInConstruction != undefined) {
				map.removeLayer(markerInConstruction);
			}
			markerInConstruction = L.marker([newHint.lat, newHint.lon], {
				icon: markerIcon
			}).addTo(map);
		});
		map.on('dragstart', function (ev) {
			closeAllMarkerPopups();
		});
		map.on('blur', function (ev) {
			closeAllMarkerPopups();
		});
		readyForDisplay = true;
		return {
			destroy: () => {
				map.remove();
			}
		};
	}
	function closeAllMarkerPopups() {
		for (const marker of markers) {
			marker.closePopup();
		}
	}
	function resizeMap() {
		if (map) {
			map.invalidateSize();
		}
	}

	async function addFreedomExchange() {
		const location = `${newHint.lat}œ${newHint.lon}`;
		await contract.addFreedomExchange(ethers.encodeBytes32String(location), newHint.txt);
		visitorInformed = false;
	}
	function cleanDesk() {
		visitorInformed = true;
		newHint = {};
	}
</script>

<div style="height:{height}px;width:${width}%" use:mapAction /> 

<svelte:window on:resize={resizeMap} />
<p><br /></p>

{#if newHint.lat != undefined}
	<p><br /></p>
	The following Freedom Exchange will be added
	<p><br /></p>
	Latitude: {newHint.lat}
	<br />
	Longitute: {newHint.lon}
	<br />
	{#if newHint.txt == undefined}
		Description: ""
	{:else}
		Description: {newHint.txt}
	{/if}
	<p><br /></p>
	{#if visitorInformed}
		<input
			bind:value={newHint.txt}
			class="myInputField"
			type="text"
			placeholder="... please describe it ..."
		/>
		{#if newHint.txt != undefined}
			<p><br /></p>
			<button class="inside" on:click={() => addFreedomExchange()}>Add</button>
		{/if}
	{:else}
		<FeedbackToVisitor on:clickedOK={() => cleanDesk()}></FeedbackToVisitor>
	{/if}
{/if}

<style>
</style>
