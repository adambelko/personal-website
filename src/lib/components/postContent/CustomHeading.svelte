<script>
	export let portableText

	$: ({ value } = portableText)
	$: ({ style } = value)
</script>

{#if style === "h2"}
	<h2 class="h2">
		<slot />
	</h2>
{/if}

<style>
	.h2 {
		font-size: 2.2rem;
		line-height: 1.25;
		margin-top: 4.3rem;
		margin-bottom: 1rem;
	}

	@media (max-width: 880px) {
		.h2 {
			font-size: 1.9rem;
		}
	}
</style>
