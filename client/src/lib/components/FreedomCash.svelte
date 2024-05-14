<script>
	import { onMount } from 'svelte';
	import Videos from './Videos.svelte';
	import FreedomWallets from './FreedomWallets.svelte';
	import LogBook from './LogBook.svelte';
	import Philosophy from './Philosophy.svelte';

	let visitorHasBrowserWallet = false;
	let invest;
	let showPhilosophy;
	let showWallets;
	let visitorWithMobile = false;

	onMount(async () => {
		if (typeof window.ethereum === 'undefined') {
			visitorHasBrowserWallet = false;
		} else {
			visitorHasBrowserWallet = true;
		}
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		) {
			visitorWithMobile = true;
		}
	});
</script>

<section class="text-center">
	Lasst uns einander mit Respekt behandeln.

	<p><br /></p>
	<h4>Architekturen der Freiheit</h4>

	Wir wissen auch noch nicht genau welches aktuell die besten Architekturen für Freiheit,
	Weltfrieden und Freundschaft sind.
	<p><br /></p>
	Wir haben lediglich einige Möglichkeiten im Angebot, welche als Inspiration dienen können.
	<p><br /></p>
	Unsere experimentellen Währungen sind beispielsweise
	<a
		href="https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9"
		target="_blank">Freiheit</a
	>,
	<a
		href="https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368"
		target="_blank">Friede</a
	>
	und
	<a
		href="https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c"
		target="_blank">Geo Cash</a
	>.
	<p><br /></p>
	<h4>Initiale Verteilung</h4>

	<a href="https://github.com/moniquebaumann/friends-of-satoshi/blob/main/README.md" target="_blank"
		>Wir</a
	>
	fördern zuerst eine breite initiale Verteilung.
	<p><br /></p>
	Danach hinterlegen wir einen passenden Gegenwert, um
	<a href="https://www.youtube.com/watch?v=fW8amMCVAJQ" target="_blank">die Party</a>
	zu starten.
	<p><br /></p>
	Die initiale Verteilung unserer Währungen erfolgt beispielsweise per
	<a href="https://de.wikipedia.org/wiki/Geocaching" target="_blank">Geo Caching</a>.
	<!-- Die hier zu findenden Konzepte und Prototypen sollen alle Menschen inspirieren miteinander gemeinsam viele mögliche passende Architekturen für  -->
	<p><br /></p>
	<h4>Mach es Besser</h4>
	Unser Code ist
	<a href="https://github.com/FreiheitsGeld/freiheitsgeld" target="_blank">Open Source</a>. Gerne
	kopieren und besser machen.
	<p><br /></p>
	Falls Du investierst, investiere vielleicht nur sehr kleine experimentelle Beträge.
	<p><br /></p>
	Wir wissen nicht wie sich der Wert unserer Währungen entwickelt.

	<p><br /><br /><br /></p>
	<div class="content">
		<Videos displayAmount={3}></Videos>
	</div>

	<div class="content">
		<h4 class="text-center">Gesamtmengen</h4>
		<p><br /></p>
		<div class="tableDiv">
			<table>
				<tr>
					<th style="text-align: center">Währung</th>
					<th>Gesamtmenge</th>
				</tr>
				<tr>
					<td>
						<a
							href="https://polygonscan.com/token/0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7"
							target="_blank"
						>
							Freiheit
						</a>
					</td>
					<td class="longInfo">
						<a
							href="https://www.geckoterminal.com/polygon_pos/pools/0xf1d949b014da81a14986c9c3900151a54c0393b9"
							target="_blank"
						>
							9.000.000.000 Coins
						</a>
					</td>
				</tr>
				<tr>
					<td>
						<a
							href="https://polygonscan.com/token/0x0715184614CA1e90EafDf7A4d7fE33B046b47C02"
							target="_blank"
						>
							Friede
						</a>
					</td>
					<td class="longInfo">
						<a
							href="https://www.geckoterminal.com/polygon_pos/pools/0xd38acec059220e8ce1a50783490b73a4a5422368"
							target="_blank"
						>
							9.000.000.000 Coins
						</a>
					</td>
				</tr>
				<tr>
					<td>
						<a
							href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459"
							target="_blank"
						>
							Geo Cash
						</a>
					</td>
					<td class="longInfo">
						<a
							href="https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c"
							target="_blank"
						>
							360.000.000 Coins
						</a>
					</td>
				</tr>
			</table>
		</div>
		<p><br /><br /></p>

		<button class="button" on:click={() => (showWallets = !showWallets)}>
			Generiere Freiheitsgeldbeutel
		</button>
		{#if showWallets}
			<FreedomWallets></FreedomWallets>
		{/if}

		<p><br /><br /></p>

		<button class="button" on:click={() => (invest = !invest)}>
			Kaufe und Verkaufe Freiheitsgeld
		</button>
		{#if invest}
			<p><br /><br /><br /></p>
			Bitte tausche unsere Freiheitswährungen lediglich mit friedliebenden Menschen, die jeden Menschen
			auf der Welt mit Respekt behandeln.
			<p><br /></p>
			Falls Du noch niemanden kennst, der entsprechend auch schon Freiheitsgeld hat, kannst Du Freiheitsgeld
			mit einem Browser Wallet wie
			<a href="https://metamask.io" target="_blank">metamask.io</a> z.B. bei
			<a href="https://app.uniswap.org/swap" target="_blank">uniswap.org</a>
			kaufen und verkaufen.
			<p><br /></p>
			Dazu brauchst Du MATIC auf der
			<a href="https://portal.polygon.technology/bridge" target="_blank">Polygon POS Blockchain</a>
			sowie die Smart Contract Adressen:
			<p><br /><br /><br /></p>
			<a
				href="https://polygonscan.com/token/0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7"
				target="_blank">Freiheit</a
			>: 0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7
			<p><br /></p>
			<br />
			<a
				href="https://polygonscan.com/token/0x0715184614CA1e90EafDf7A4d7fE33B046b47C02"
				target="_blank">Friede</a
			>: 0x0715184614CA1e90EafDf7A4d7fE33B046b47C02
			<p><br /></p>
			<br />
			<a
				href="https://polygonscan.com/token/0xb841a4f979f9510760ecf60512e038656e68f459"
				target="_blank">Geo Cash</a
			>: 0xb841A4f979F9510760ecf60512e038656E68f459
			<p><br /><br /><br /></p>

			<h6>Support</h6>
			<p><br /></p>
			Falls Du ein Neueinsteiger bist und gerade erst mal nicht weißt was hier los ist, atme tief durch.
			<p><br /></p>
			Wahrscheinlich braucht es ein paar oder sogar viele entspannte Anläufe.
			<p><br /></p>
			Das erste mal Fahrrad lerntest Du wahrscheinlich auch eher weniger durch lesen und eher mehr durch
			geduldig mit vielen entspannten Anläufen ausprobieren.
			<p><br /></p>
			Falls Du nach vielen entspannten Anläufen noch nicht klar kommst, frag vielleicht
			<a href="https://www.house-of-satoshi.ch/" target="_blank"> jemanden der sich auskennt </a>
			und dem Du wirklich traust.

			<!-- <p><br /></p>
			<LogBook {visitorWithMobile}></LogBook> -->
		{/if}

		<p><br /><br /></p>
		<button class="button" on:click={() => (showPhilosophy = !showPhilosophy)}>
			Philosophie
		</button>
		{#if showPhilosophy}
			<p><br /><br /></p>
			<Philosophy></Philosophy>
		{/if}
		<p><br /><br /></p>
		Ich kaufe und verkaufe
		<a
			href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459"
			target="_blank">Geo Cash</a
		>, Silber und Gold.
		<a href="https://github.com/moniquebaumann" target="_blank"><i>Monique Baumann</i></a>

		<p><br /><br /></p>
		{#if !visitorHasBrowserWallet && !visitorWithMobile}
			<p><br /></p>
			Bitte installiere ein vertrauenswürdiges Browserwallet wie beispielsweise<a
				href="https://metamask.io"
				target="_blank">metamask.io</a
			>
			oder nutze das im <a href="https://brave.com" target="_blank">brave.com</a> Browser eingebaute
			Wallet.
		{:else if !visitorHasBrowserWallet && visitorWithMobile}
			Da es sich bei dieser Seite um eine verteilte Web App (dApp) handelt, besuche diese Seite
			bitte mit dem in der <a href="https://metamask.io" target="_blank">Metamask App</a> eingebauten
			Browser.
		{/if}
	</div>
</section>

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
	.tableDiv {
		overflow-x: scroll;
	}
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	td,
	th {
		border: 1px solid #dddddd;
		padding: 8px;
		text-align: center;
	}

	tr:nth-child(even) {
		background-color: #dddddd;
	}
</style>
