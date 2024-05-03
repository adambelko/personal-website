<script>
	import PostList from "$lib/components/PostList.svelte"
	import TagList from "$lib/components/TagList.svelte"

    export let data
</script>

<div class="page-container">
    <h1>My posts</h1>
    <TagList tagList={data.tagList} />
    <PostList postList={data.postList} />
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
</style>