<script>
	import PostList from "$lib/components/PostList.svelte"
	import TagList from "$lib/components/TagList.svelte"

	export let data
</script>

<svelte:head>
    <title>Adam Belko - Front End Software Developer</title>
</svelte:head>

<div class="page-container">
    <h1>Filtered posts</h1>

    <div class="navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
            <g fill="none">
                <path stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12h14" />
                <path fill="#212121" d="m2.285 11.797l5.45-3.893A.8.8 0 0 1 9 8.554v6.891a.8.8 0 0 1-1.265.651l-5.45-3.893a.25.25 0 0 1 0-.406" />
            </g>
        </svg>
        <a href="/posts">Go to all posts</a>
    </div>

    <TagList tagList={data.tagList} slug={data.slug}/>
    <PostList postList={data.postList}/>
</div>


<style>
    .page-container {
        display: flex;
        flex-direction: column;
        width: 860px;
        margin: auto;
    }

    h1 {
        margin-bottom: 1em;
    }

    .navigation {
        display: flex;
        align-items: center;
        gap: .2em;
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }
</style>