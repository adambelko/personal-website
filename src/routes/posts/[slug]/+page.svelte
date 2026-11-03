<script>
	import Icon from "@iconify/svelte"
	import { formatDate } from "$lib/helpers/date"
	import { urlFor } from "$lib/sanity/image"
	import { PortableText } from "@portabletext/svelte"
	import CustomHeading from "$lib/components/postContent/CustomHeading.svelte"
	import CustomParagraph from "$lib/components/postContent/CustomParagraph.svelte"
	import Link from "$lib/components/postContent/Link.svelte"
	import Image from "$lib/components/postContent/Image.svelte"

	export let data

	const postContent = {
		types: {
			image: Image
		},
		marks: {
			link: Link
		},
		block: {
			normal: CustomParagraph,
			h2: CustomHeading
		}
	}
</script>

<svelte:head>
	<title>{data.post.title} - Adam Belko</title>
	<meta name="description" content={data.post.metaDescription} />
</svelte:head>

<div class="container">
	<article class="post-container">
		<div class="post-date-container">
			<Icon icon="wi:time-4" width="1.2em" height="1.2em" style="color: black" />

			<span>{formatDate(data.post.publishedAt)}</span>
		</div>

		<h1 class="post-title">
			{data.post.title}
		</h1>

		<div class="post-header">
			<p class="small-description">{data.post.smallDescription}</p>
			<img src={urlFor(data.post.titleImage).url()} alt={data.post.titleImage.alt} />
		</div>

		<div class="post-content">
			<PortableText value={data.post.content} components={postContent} />
		</div>
	</article>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		padding: 0 16px;
	}

	.post-content :global(ul) {
		list-style-type: disc;
		padding-left: 1.5rem;
		margin: 1rem 0 1.5rem;
	}

	.post-content :global(ol) {
		list-style-type: decimal;
		padding-left: 1.5rem;
		margin: 1rem 0 1.5rem;
	}

	.post-content :global(li) {
		padding-left: 0.25rem;
		margin-bottom: 0.5rem;
	}

	.post-content :global(ul ul) {
		list-style-type: circle;
	}

	.post-content :global(code) {
		padding: 0.15em 0.35em;
		border-radius: 4px;
		background: #f1f1f1;
		font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
		font-size: 0.9em;
	}

	.post-container {
		display: flex;
		flex-direction: column;
		max-width: 730px;
	}

	.post-date-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.2em;
	}

	.post-title {
		font-size: 2.8rem;
		text-align: center;
		margin: 0.5rem auto 0 auto;
	}

	.post-header img {
		width: 100%;
		height: auto;
		margin-bottom: 2rem;
	}

	.small-description {
		margin: 2rem 0;
	}

	.post-content,
	.small-description {
		/*font-size: 1.2rem;*/
		line-height: 1.5em;
	}

	/* Responsive styles */
	@media (max-width: 880px) {
		.post-header img {
			width: 100%;
			height: auto;
			max-width: 100%;
			object-fit: cover;
		}

		.post-title {
			font-size: 2.2rem;
		}

		.post-content,
		.small-description {
			font-size: 1.1rem;
			line-height: 1.5em;
		}
	}
</style>
