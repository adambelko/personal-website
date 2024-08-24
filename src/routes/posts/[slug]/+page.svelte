<script lang="ts">
	import Icon from "@iconify/svelte"
	import { formatDate } from "$lib/helpers/date"
	import { urlFor } from "$lib/sanity/image"
	import { PortableText } from "@portabletext/svelte"
	import CustomHeading from "$lib/components/postContent/CustomHeading.svelte"
	import CustomParagraph from "$lib/components/postContent/CustomParagraph.svelte"
	import Link from "$lib/components/postContent/Link.svelte"

	export const postContent = {
		marks: {
			link: Link
		},
		block: {
			normal: CustomParagraph,
			h2: CustomHeading
		}
	}

	export let data
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<article class="post-container">
	<div class="post-date-container">
		<Icon icon="wi:time-4" width="1.2em" height="1.2em" style="color: black" />
		<span>{formatDate(data.post._createdAt)}</span>
	</div>

	<h1 class="post-title">
		{data.post.title}
	</h1>

	<div class="post-header">
		<p class="small-description">{data.post.smallDescription}</p>
		<img src={urlFor(data.post.titleImage).url()} alt={data.post.slug.current} />
	</div>

	<div class="post-content">
		<PortableText value={data.post.content} components={postContent} />
	</div>
</article>

<style>
	.post-container {
		display: flex;
		flex-direction: column;
		margin: auto;
		width: 700px;
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
		font-size: 1.2rem;
		line-height: 1.5em;
	}
</style>
