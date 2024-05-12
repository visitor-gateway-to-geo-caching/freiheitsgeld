<script>
	import LogBook from '$components/LogBook.svelte';
	import { germanTexts } from '$lib/helpers';
	import { onMount } from 'svelte';

	let texts = germanTexts;

	let visitorHasBrowserWallet = false;
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

<div class="text-center content">
	<h2>{texts.logBook}</h2>
	<LogBook {texts} {visitorWithMobile}></LogBook>

	{#if !visitorHasBrowserWallet}
	 	<p><br><br><br></p>
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
