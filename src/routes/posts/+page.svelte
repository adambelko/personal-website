<script>
	import PostList from "$lib/components/PostList.svelte"
    import TagList from "$lib/components/TagList.svelte"

    export let data
</script>

<div class="page-container">
    <h1>My posts</h1>

    <TagList tagList={data.tagList} />

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

    .page-container p {
        font-size: 1.2rem;
        line-height: 1.5em;
        margin-top: 1.5em;
    }

    .post-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 1.1em;
    }


</style>