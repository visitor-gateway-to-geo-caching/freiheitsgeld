<script>
	// import { onMount } from 'svelte';

	// let visitorHasBrowserWallet = false;
	// let visitorWithMobile = false;

	// onMount(async () => {
	// 	if (typeof window.ethereum === 'undefined') {
	// 		visitorHasBrowserWallet = false;
	// 	} else {
	// 		visitorHasBrowserWallet = true;
	// 	}
	// 	if (
	// 		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	// 	) {
	// 		visitorWithMobile = true;
	// 	}
	// });
</script>

<div class="text-center content">
	<h2>Spuren der Freiheit</h2>
	<p><br /></p>
	Jeder Geo Cacher ist eingeladen Einträge im
	<a href="https://freedomlog.de" target="_blank">Logbuch der Freiheit</a>
	zu machen.
	<p><br /></p>
	Die Einträge werden auf der
	<a
		href="https://polygonscan.com/token/0xb841a4f979f9510760ecf60512e038656e68f459"
		target="_blank"
	>
		Polygon POS Blockchain
	</a>
	gespeichert.
	<p><br /></p>
	Mit jedem Eintrag kann
	<a
		href="https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c"
		target="_blank"
	>
		Geo Cash
	</a>
	an andere gespendet werden.

	<p><br /><br /></p>

	<!-- <LogBook {visitorWithMobile}></LogBook> -->
</div>

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
