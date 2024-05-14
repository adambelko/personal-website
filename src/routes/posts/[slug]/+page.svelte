<script>
    // Helper fn import
    import { formatDate } from "$lib/helpers/date"

    // Sanity import
    import { urlFor } from "$lib/sanity/image"

    // Content formatting imports
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
			h2: CustomHeading,
		},
	}

	export let data
</script>

<svelte:head>
    <title>{data.post.title}</title>
</svelte:head>

<article class="post-container">
    <div class="post-date-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 32 32">
            <path fill="#212121" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"/><path fill="#212121" d="M20.59 22L15 16.41V7h2v8.58l5 5.01z"/>
        </svg>
        <span>{formatDate(data.post._createdAt)}</span>
    </div>

    <h1 class="post-title">
        {data.post.title}
    </h1>

    <div class="post-header">
        <p class="small-description">{data.post.smallDescription}</p>
        <img src={urlFor(data.post.titleImage).url()} alt={data.post.slug.current}>
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
        text-align: center;
    }

    .post-title {
        font-size: 2.8rem;
        text-align: center;
        margin: .5rem auto 0 auto;
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