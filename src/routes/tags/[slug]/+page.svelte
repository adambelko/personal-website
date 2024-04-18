<script>
	import PostList from "$lib/components/PostList.svelte"
	import TagList from "$lib/components/TagList.svelte"

	export let data
</script>

<div class="page-container">
    <h1>Filtered posts</h1>

    <div class="navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="#212121" d="M7 17h7v-2H7zm0-4h10v-2H7zm0-4h10V7H7zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z" />
        </svg>
        <a href="/posts">Go to all posts</a>
    </div>
    <TagList tagList={data.tagList} slug={data.slug} />

    <div class="post-list">
        <PostList postList={data.postList} />
    </div>
</div>


<style>
    .page-container {
        display: flex;
        flex-direction: column;
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

    .post-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1.1em;
    }


</style>