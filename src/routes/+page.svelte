<script>
    import {urlFor} from "$lib/sanity.js"
	export let data
</script>

<svelte:head>
    <title>Adam Belko</title>
</svelte:head>

<div class="intro-container">
    <div class="intro-text">
        <span class="intro-text-medium-font">Hey, I'm Adam</span>
        <h1 class="intro-text-h1">
            <span class="intro-text-highlighted">Front End Developer</span>
            <span>I build things for the web</span>
        </h1>
        <p class="intro-text-small-font">And I love the process of turning coffee into a code, one line at a time!</p>
    </div>
    <a href="/about">
        <button class="btn-about-me">More About Me</button>
    </a>
</div>
<div class="featured-posts">
    <h2>Featured posts</h2>
    <div class="featured-posts-container">
        {#each data.postList as post}
            <article class="post-item">
                <div class="post-item-img-container">
                    <a href={post.slug.current}>
                        <img src={urlFor(post.titleImage).url()} alt={post.title}>
                    </a>
                </div>
                <div class="post-item-text">
                    <a href={post.slug.current}>
                        <div class="post-title">{post.title}</div>
                    </a>
                    <div class="post-description">{post.smallDescription}</div>
                </div>
            </article>
        {/each}
    </div>
</div>

<style>
    .intro-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .intro-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
    }

    .intro-text-h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
    }

    .intro-text-highlighted {
        color: var(--primary-color-orange)
    }

    .intro-text-small-font {
        font-size: var(--font-default-size);
        max-width: 50%;
        text-align: center;
        line-height: 1.6em;
        margin-bottom: 2rem;
    }

    .intro-text-medium-font {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 0.3rem;
    }

    .btn-about-me {
        font-size: 1.2em;
        font-weight: bold;
        padding: 0.8rem;
        background-color: var(--primary-color-orange);
        border: 3px solid black;
        cursor: pointer;
        transition: background-color 0.15s;
    }

    .btn-about-me:hover {
        background-color: #ffd426;
    }

    .featured-posts {
        display: flex;
        flex-direction: column;
        margin-top: 10em;
    }

    .featured-posts h2 {
        display: flex;
        justify-content: center;
        margin-bottom: 1.5em;
    }

    .featured-posts-container {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        gap: 1em;
    }

    .post-item {
        display: flex;
        gap: 2em;
        padding: 2em;
        background-color: var(--nav-bg-color);
        border: 2px solid var(--hr-dividor-color);
        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
        border-radius: 8px;
        transition: all .2s ease-in-out;
    }

    .post-item-img-container {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        max-width: 200px;
        height: auto;
    }

    .post-item-img-container img {
        max-width: 100%;
        height: auto;
        border-radius: .5rem;
    }

    .post-item-text {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }
</style>