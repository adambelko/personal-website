<script>
	import PostList from "$lib/components/PostList.svelte"

    export let data
</script>

<div class="posts-container">
    <h1>My posts</h1>
    <p>A collection of posts I written.</p>
    <PostList data={data} />
</div>


<style>
    .posts-container {
        display: flex;
        flex-direction: column;
    }

    .posts-container p {
        font-size: 1.2rem;
        line-height: 1.5em;
        margin-top: 1.5em;
    }
</style>