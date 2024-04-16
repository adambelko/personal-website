<script>
	import PostList from "$lib/components/PostList.svelte"

	export let data
</script>

<svelte:head>
    <title>Adam Belko</title>
</svelte:head>

<div class="intro-container">
    <div class="intro-text-area">
        <span class="text-area-medium-font">Hey, I'm Adam</span>
        <h1 class="text-area-h1">
            <span class="text-area-highlighted">Front End Developer</span>
            <span>I build things for the web</span>
        </h1>
        <p class="text-area-small-font">And I love the process of turning coffee into a code, one line at a time!</p>
    </div>
    <a href="/about">
        <button class="intro-btn">More About Me</button>
    </a>
</div>

<div class="featured-posts-container">
    <h2>Featured posts</h2>
    <div class="post-list">
        <PostList data={data} />
    </div>
</div>

<style>
    .intro-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .intro-text-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
    }

    .text-area-h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
    }

    .text-area-highlighted {
        color: var(--primary-color-orange)
    }

    .text-area-small-font {
        font-size: var(--font-default-size);
        max-width: 50%;
        text-align: center;
        line-height: 1.6em;
        margin-bottom: 2rem;
    }

    .text-area-medium-font {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 0.3rem;
    }

    .intro-btn {
        font-size: 1.2em;
        font-weight: bold;
        padding: 0.8rem;
        background-color: var(--primary-color-orange);
        border: 3px solid black;
        cursor: pointer;
        transition: background-color 0.15s;
    }

    .intro-btn:hover {
        background-color: var(--primary-color-orange-hover);
    }

    .featured-posts-container {
        display: flex;
        flex-direction: column;
        margin-top: 10em;
    }

    .featured-posts-container h2 {
        display: flex;
        justify-content: center;
        margin-bottom: 1.5em;
    }

    .post-list {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        gap: 1.1em;
    }
</style>