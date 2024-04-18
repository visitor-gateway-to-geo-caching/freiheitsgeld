<script>
	import InvestmentInfo from '$components/InvestmentInfo.svelte';
	import { onMount } from 'svelte';
	import { getTexts } from '$lib/helpers';

	let texts = {};

	let visitorHasBrowserWallet = false;
	let visitorWithMobile = false;

	onMount(async () => {
		texts = getTexts();
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

<div class="text-center content">
	<h2>{texts.investment}</h2>
	<InvestmentInfo {texts} {visitorWithMobile}></InvestmentInfo>

	{#if !visitorHasBrowserWallet}
		{@html texts.studySmartContract}
		<p><br /><br /></p>
		<div class="center">
			<img class="explanatoryImage" src="/smart-contract.png" alt="" />
		</div>
		<p><br /><br /></p>
	{/if}
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
