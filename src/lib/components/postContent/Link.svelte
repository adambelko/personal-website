<script>
	export let portableText

	$: ({ value } = portableText)
	$: finalUrl =
		value.url.startsWith("http://") || value.url.startsWith("https://") ? value.url : `https://${value.url}`
</script>

<div>
	<a href={finalUrl} class="link" target="_blank" rel="noopener noreferrer">
		<slot />
	</a>
</div>

<style>
	.link {
		text-decoration: underline solid var(--primary-color-orange) 2px;
		text-underline-offset: 5px;
	}

	.link:hover {
		text-decoration: underline solid var(--primary-color-orange) 3px;
	}
</style>
