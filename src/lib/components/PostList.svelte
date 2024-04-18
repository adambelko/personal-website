<script>
    // Sanity imports
    import { urlFor } from "$lib/sanity/image.js"

    // Helper fn imports
    import { formatDate } from "$lib/helpers/date.js"

    export let postList
</script>

{#each postList as post}
    <article class="post">
        <div class="post-img-container">
            <a href="/posts/{post.slug.current}">
                <img src={urlFor(post.titleImage).url()} alt={post.slug.current}>
            </a>
        </div>
        <div class="post-text-section">
            <div class="post-date-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="0.9em" height="0.9em" viewBox="0 0 32 32">
                    <path fill="#212121" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"/><path fill="#212121" d="M20.59 22L15 16.41V7h2v8.58l5 5.01z"/>
                </svg>
                <span>{formatDate(post._createdAt)}</span>
            </div>
            <a href="/posts/{post.slug.current}" class="post-title">{post.slug.current}</a>
            <p class="post-description">{post.smallDescription}</p>
            {#if post.tags}
                <div class="post-tag-list">
                    {#each post.tags as tag}
                        <a href="/tags/{tag.slug.current}">
                            <div class="post-tag">{tag.title}</div>
                        </a>
                    {/each}
                </div>
            {/if}
        </div>
    </article>
{/each}

<style>
    .post {
        display: flex;
        gap: 2em;
        padding: 1.8em;
        background-color: var(--nav-bg-color);
        border: 2px solid var(--hr-dividor-color);
        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
        border-radius: 8px;
        transition: all .2s ease-in-out;
    }

    .post-img-container {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        max-width: 190px;
        height: auto;
    }

    .post-img-container img {
        max-width: 100%;
        height: auto;
        border-radius: .5rem;
    }

    .post-text-section {
        display: flex;
        flex-direction: column;
        line-height: 1.3em;
    }

    .post-title {
        font-size: 1.6rem;
        font-weight: bold;
        line-height: 1.1em;
    }

    .post-description {
        margin: 1em 0;
    }

    .post-date-container {
        display: flex;
        align-items: center;
        gap: 0.4em;
        font-size: .9em;
        margin-bottom: .1em;
    }

    .post-tag-list {
        display: flex;
        gap: .5em;
    }

    .post-tag {
        font-size: .8rem;
        padding: .1em .8em;
        background-color: var(--primary-color-orange);
        border: 2px solid var(--font-color-primary-black);
        border-radius: .6em;
    }

    .post-tag:hover {
        background-color: var(--primary-color-orange-hover);
    }
</style>