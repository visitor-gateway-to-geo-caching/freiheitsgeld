<script>
	import { onMount } from 'svelte';
	import Videos from './Videos.svelte';
	import FreedomWallets from './FreedomWallets.svelte';
	import InvestmentInfo from './InvestmentInfo.svelte';
	import FreedomTreasuries from './FreedomTreasuries.svelte';
	import FreedomTreasuriesOffChain from './FreedomTreasuriesOffChain.svelte';
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
			Bevor Du das 
			<a
				href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459"
				target="_blank">Geld der Freiheit</a
			>
			verstehst, solltest Du zuerst den Vorläufer (<a
				href="https://www.youtube.com/watch?v=XcsvjUW9D18"
				target="_blank">Bitcoin</a
			>) verstehen.
			<p><br /></p>
			Dabei kann 
			<a href="https://www.youtube.com/watch?v=XcsvjUW9D18" target="_blank">diese</a>
			einfache, schnelle und gute Einführung helfen.
			<p><br /></p>
			<a
				href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459"
				target="_blank">Geo Cash</a
			>
			ist das neue Bitcoin.
			<h4>Initiale Verteilung</h4>
			Die initiale Verteilung von 
			<a
				href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459"
				target="_blank">Geo Cash</a
			>
			erfolgt per
			<a href="https://de.wikipedia.org/wiki/Geocaching" target="_blank">Geo Caching</a>.
			<p><br /></p>

			<a href="https://github.com/moniquebaumann/friends-of-satoshi" target="_blank">Wir</a> fördern
			zuerst eine breite initiale Verteilung.
			<p><br /></p>
			Danach hinterlegen wir einen passenden Gegenwert, um 
			<a
				href="https://www.youtube.com/watch?v=fW8amMCVAJQ"
				target="_blank">die Party</a
			>
			so richtig zu starten.
			<p><br /></p>

			<p><br /></p>
			<Videos menu={'treasuries'} displayAmount={9}></Videos>
			<p><br /><br /></p>

			<button class="button" on:click={() => (showWallets = !showWallets)}>
				{texts.generatePaperWallet}
			</button>
			{#if showWallets}
				<FreedomWallets {texts}></FreedomWallets>
			{/if}
		</div>

		<div class="content">
			<h4 class="text-center">{texts.totalSupply}</h4>
			360.000.000
			<a
				href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459"
				target="_blank">Geo Cash</a
			>
			<p><br></p>
			Weitere Details findest Du zum Beispiel bei <a href="https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c" target="_blank">geckoterminal.com</a> und im 
			<a href="https://github.com/geo-logs/freiheit" target="_blank">Code Repository</a>. 

			<p><br /></p>
			<!-- <div class="center">
				<img class="explanatoryImage" src="/smart-contract.png" alt="" />
			</div>
			<p><br /><br /></p> -->
			<p><br /></p>
			<button class="button" on:click={() => (showTreasuries = !showTreasuries)}>
				{texts.playWithTreasuries}
			</button>
			{#if showTreasuries}
				<p><br /></p>
				{#if visitorHasBrowserWallet && advanced}
					<FreedomTreasuries {texts}></FreedomTreasuries>
				{:else}
					<FreedomTreasuriesOffChain {texts}></FreedomTreasuriesOffChain>
					<p><br /></p>
					<!-- <button class="inside" on:click={() => (advanced = !advanced)}>{texts.switchToOnChainMode}</button> -->
				{/if}
			{/if}

			<p><br /><br /></p>

			<button class="button" on:click={() => (invest = !invest)}>
				{texts.buyAndSellFC}
			</button>
			{#if invest}
				<p><br /></p>
				<InvestmentInfo {texts} {visitorWithMobile}></InvestmentInfo>
			{/if}

			<!-- <p><br /><br /></p>
			<button class="button" on:click={() => (showExchanges = !showExchanges)}>
				{texts.showExchanges}
			</button>
			{#if showExchanges}
				<p><br /></p>
				<FreedomExchanges {texts}></FreedomExchanges>
			{/if} -->
			<!-- <p><br /><br /></p>
			<button class="button" on:click={() => (showFreedomTribunal = !showFreedomTribunal)}>
				{texts.playFreedomTribunal}
			</button>
			{#if showFreedomTribunal}
				<p><br /></p>
				<FreedomTribunal {texts}></FreedomTribunal>
			{/if}
			<p><br /><br /></p>
			<button class="button" on:click={() => (showFreedomEnterprise = !showFreedomEnterprise)}>
				{texts.freedomEnterprise}
			</button>
			{#if showFreedomEnterprise}
				<p><br /></p>
				<FreedomEnterprise {texts}></FreedomEnterprise>
			{/if} -->

			<p><br /><br /></p>
			<button class="button" on:click={() => (showPhilosophy = !showPhilosophy)}>
				{texts.showPhilosophy}
			</button>
			{#if showPhilosophy}
				<p><br /></p>
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
</style>
