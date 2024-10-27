<script>
	let { portableText, children } = $props()

	let { value } = $derived(portableText)
	let { style } = $derived(value)
</script>

<div>
	{#if style === "normal"}
		<p class="p">
			{@render children?.()}
		</p>
	{/if}
</div>

<style>
	.p {
		margin-top: 1rem;
	}
</style>
