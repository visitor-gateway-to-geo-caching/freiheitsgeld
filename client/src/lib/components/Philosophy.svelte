<script>
	import { getRandomEntries } from '$lib/helpers';
	import { onMount } from 'svelte';

	export let texts;
	let freedomWords = '';

	onMount(async () => {
		freedomWords = getRandomEntries(texts.heisenberg, 1)[0];
	});
</script>

{#if freedomWords !== ''}
	{@html texts.philosophy17}

	
	<p><br /><br /><br /></p>

	<div class="iframediv">
		<iframe
			class="rumble"
			width="100%"
			height="600"
			src="https://rumble.com/embed/v337a78/?pub=1e5w3p"
			frameborder="0"
			allowfullscreen
			title="Getting Ready"
		/>
	</div>	
	<p><br /><br /><br /></p>

	<div class="iframediv">
		<iframe
			class="rumble"
			width="100%"
			height="600"
			src="https://rumble.com/embed/v11eh22/?pub=3blg3u"
			frameborder="0"
			allowfullscreen
			title="Getting Ready"
		/>
	</div>	
	<h4>{texts.philosophy14}</h4>
	{@html texts.philosophy15}

	
	<p><br /><br /></p>
	<div class="iframediv">
		<iframe
			class="rumble"
			width="100%"
			height="600"
			src="https://rumble.com/embed/v1im0wr/?pub=1e5w3p"
			frameborder="0"
			allowfullscreen
			title="Freedom of Speech"
		/>
	</div>
	<p><br /><br /></p>
	<a href="https://otherparty.co.uk" target="_blank">
		<div class="center">
			<img class="explanatoryImage" src="/direct-democracy.png" alt="" />
		</div>
	</a>
	<p><br /></p>
	
	{@html texts.philosophy11}

	<p><br /></p>

	<h4>{texts.philosophy22}</h4>
	{@html texts.philosophy23}


	<div id="impressum">
		<h4>Impressum</h4>
		{@html texts.impressumLong}
	</div>

{/if}
