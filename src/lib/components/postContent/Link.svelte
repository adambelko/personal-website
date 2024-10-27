<script>
	let { portableText, children } = $props()

	let { value } = $derived(portableText)
	let finalUrl = $derived(
		value.url.startsWith("http://") || value.url.startsWith("https://") ? value.url : `https://${value.url}`
	)
</script>

<a href={finalUrl} class="link" target="_blank" rel="noopener noreferrer">
	{@render children?.()}
</a>

<style>
	.link {
		text-decoration: underline solid var(--primary-color-orange) 2px;
		text-underline-offset: 5px;
	}

	.link:hover {
		text-decoration: underline solid var(--primary-color-orange) 3px;
	}
</style>
