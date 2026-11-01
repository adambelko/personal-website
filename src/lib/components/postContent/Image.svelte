<script>
	import { urlFor } from "$lib/sanity/image"

	export let portableText

	$: image = portableText.value
	$: imageUrl = image?.asset ? urlFor(image).width(1200).auto("format").url() : ""
</script>

{#if imageUrl}
	<figure>
		<img src={imageUrl} alt={image.alt ?? ""} loading="lazy" />
		{#if image.caption}
			<figcaption>{image.caption}</figcaption>
		{/if}
	</figure>
{/if}

<style>
	figure {
		max-width: 100%;
		margin: 1.5rem 0;
	}

	img {
		display: block;
		max-width: 100%;
		height: auto;
	}
</style>
