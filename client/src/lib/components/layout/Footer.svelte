<script>
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<span>
			<a
				class="underline"
				href="https://github.com/FreiheitsGeld/freiheitsgeld"
				target="_blank"
				rel="noopener">GitHub Code</a
			>
		</span>
		<span>•</span>
		<span>
			Freiheit
			<!-- <a class="underline" href="https://freedomcash.org" target="_blank" rel="noopener"
				>FreedomCash.org</a
			> -->
		</span>
		<span>•</span>
		<span
			><a href="/philosophy">Impressum</a
			></span
		>
	</div>
</footer>

<style>
	/* footer {
		position: fixed;
		height: 9vh;
		background-color: var(--accent);
		color: var(--white);
		padding: var(--s-8);
		font-size: var(--font-200);
		bottom: 0px;
		left: 0px;
		right: 0px;
		margin-bottom: 0px;
	} */
	footer {
		background-color: var(--accent);
		color: var(--white);
		padding: var(--s-8);
		font-size: var(--font-200);
	}
	.container {
		display: grid;
		gap: var(--s-2);
		justify-items: center;
		justify-content: center;
		text-align: center;
	}
	@media (min-width: 768px) {
		footer {
			padding: var(--s-12);
		}
		.container {
			display: flex;
			gap: var(--s-6);
		}
	}
	@media print {
		footer {
			display: none;
		}
	}
</style>
