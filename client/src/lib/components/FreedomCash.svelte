<script>
	import { onMount } from 'svelte';
	import Videos from './Videos.svelte';
	import FreedomWallets from './FreedomWallets.svelte';
	import LogBook from './LogBook.svelte';
	import Philosophy from './Philosophy.svelte';

	export let texts;
	let visitorHasBrowserWallet = false;
	let invest;
	let showPhilosophy;
	let showWallets;
	let showTreasuries;
	let visitorWithMobile = false;
	let advanced = false;

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
	{#if texts.whatWeDo != ''}
		<div class="content">
			{@html texts.whatWeDo}

			<h4>Das Neue Bitcoin</h4>
			Bevor Du <a href="https://privacy-is-not-a-crime.de/" target="_blank">unsere Währungen</a> verstehst, solltest Du zuerst <a href="https://www.youtube.com/watch?v=SGWIh9yzg-I" target="_blank">den Vorläufer</a> (<a
				href="https://www.youtube.com/watch?v=XcsvjUW9D18"
				target="_blank">Bitcoin</a
			>) verstehen.
			<p><br /></p>
			Dabei kann
			<a href="https://www.youtube.com/watch?v=XcsvjUW9D18" target="_blank">diese</a>
			einfache, schnelle und gute Einführung helfen.
			<p><br /></p>
			<a
				href="https://polygonscan.com/token/0x099471B71c9D8b0C6b616eE9A7C645e22cA9cfF7"
				target="_blank">Freiheit</a
			>,
			<a
				href="https://polygonscan.com/token/0x0715184614CA1e90EafDf7A4d7fE33B046b47C02"
				target="_blank">Friede</a
			>
			und
			<a
				href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459"
				target="_blank">Geo Cash</a
			>
			sind polypolistische Alternativen zu Bitcoin.
			<h4>Initiale Verteilung</h4>

			<a href="https://github.com/moniquebaumann/friends-of-satoshi/blob/main/README.md" target="_blank">Wir</a> fördern
			zuerst eine breite initiale Verteilung.
			<p><br /></p>
			Danach hinterlegen wir einen passenden Gegenwert, um
			<a href="https://www.youtube.com/watch?v=fW8amMCVAJQ" target="_blank">die Party</a>
			zu starten.
			<p><br /></p>
			Die initiale Verteilung unserer Währungen erfolgt beispielsweise per
			<a href="https://de.wikipedia.org/wiki/Geocaching" target="_blank">Geo Caching</a>.
			<p><br /><br /></p>

			<Videos {texts} displayAmount={3}></Videos>
		</div>

		<div class="content">
			<h4 class="text-center">{texts.totalSupplies}</h4>
			<p><br /></p>
			<div class="tableDiv">
				<table>
					<tr>
						<th style="text-align: center">{texts.currency}</th>
						<th>{texts.totalSupply}</th>
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
								href="https://www.geckoterminal.com/polygon_pos/pools/0x2bc882c913655648c582aabde5aed2acd4e3ad7b"
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
								href="https://www.geckoterminal.com/polygon_pos/pools/0x16e579221bb5d27be335bba6966f87f013894226"
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
				{texts.generatePaperWallet}
			</button>
			{#if showWallets}
				<FreedomWallets {texts}></FreedomWallets>
			{/if}

			<p><br /><br></p>

			<button class="button" on:click={() => (invest = !invest)}>
				{texts.buyAndSellFC}
			</button>
			{#if invest}
				<p><br /><br></p>
				Du kannst unsere Währungen bei
				<a href="https://app.uniswap.org/swap" target="_blank">uniswap.org</a>
				kaufen und verkaufen. <br />Dazu brauchst Du die jeweilige Smart Contract Adresse:
				<p><br /></p>
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
				<p><br /></p>

				<p><br /></p>
				<LogBook {texts} {visitorWithMobile}></LogBook>
			{/if}

			<p><br /><br /></p>
			<button class="button" on:click={() => (showPhilosophy = !showPhilosophy)}>
				{texts.showPhilosophy}
			</button>
			{#if showPhilosophy}
				<p><br /><br></p>
				<Philosophy {texts}></Philosophy>
			{/if}
			<p><br /><br /></p>
			{@html texts.quote}

			<p><br /><br /></p>
			{#if !visitorHasBrowserWallet && !visitorWithMobile}
				{@html texts.useBW}
			{:else if !visitorHasBrowserWallet && visitorWithMobile}
				{@html texts.useBIB}
			{/if}
		</div>
	{/if}
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
