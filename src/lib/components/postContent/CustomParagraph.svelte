<script>
	export let portableText

	$: ({ value } = portableText)
	$: ({ style } = value)
</script>

{#if style === "normal"}
	<p class="paragraph">
		<slot />
	</p>
{/if}

<style>
	.paragraph {
		margin-bottom: 1.25rem;
		line-height: 1.7;
	}
</style>
