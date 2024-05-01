<script type="ts">
	import { page } from '$app/stores';
	const brand = 'Geo Cash';
	export let title = brand;
	export let description =
		'FreedomCash Helps Those Who Help Each Other Into Freedom, Fairness, Love and Peace.';
	export let image =
		'https://github.com/FreiheitsGeld/freiheitsgeld/assets/160405077/d8bf69ab-b058-454a-9d99-5fd49aae75c6';
	export let url = `https://${$page.url.host}${$page.url.pathname}`;
</script>

<svelte:head>
	<title>{title} - {brand}</title>
	<meta name="description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`${title} - ${brand}`} />
	<meta property="og:site_name" content={brand} />
	<meta property="og:description" content={description} />
	<meta property="og:image" name="og:image" content={image} />
	<meta name="og:url" content={url} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${title} - ${brand}`} />
	<meta name="twitter:description" content={description} />
</svelte:head>
