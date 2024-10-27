<script>
	let { portableText, children } = $props()

	let { value } = $derived(portableText)
	let { style } = $derived(value)
</script>

<div>
	{#if style === "h2"}
		<h2 class="h2">
			{@render children?.()}
		</h2>
	{/if}
</div>

<style>
	.h2 {
		font-size: 2.2rem;
		line-height: 1.1em;
		margin-top: 1em;
	}
</style>
