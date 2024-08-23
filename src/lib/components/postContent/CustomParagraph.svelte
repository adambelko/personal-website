<script>
	export let portableText

	$: ({ value } = portableText)
	$: ({ style } = value)
</script>

<div>
	{#if style === "normal"}
		<p class="p">
			<slot />
		</p>
	{/if}
</div>

<style>
	.p {
		margin-top: 1rem;
	}
</style>
