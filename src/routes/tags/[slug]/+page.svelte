<script>
	import Icon from "@iconify/svelte"
	import PostList from "$lib/components/PostList.svelte"
	import TagList from "$lib/components/TagList.svelte"

	export let data
</script>

<svelte:head>
	<title>Tags</title>
</svelte:head>

<div class="page-container">
	<h1>Filtered posts</h1>

	<div class="navigation">
		<Icon icon="lets-icons:arrow-left-long" width="1.3em" height="1.3em" style="color: black" />
		<a href="/posts">Go to all posts</a>
	</div>

	<TagList tagList={data.tagList} slug={data.slug} />
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

	.navigation {
		display: flex;
		align-items: center;
		gap: 0.2em;
		font-size: 1.2rem;
		margin-bottom: 1.5rem;
		text-decoration: underline solid var(--primary-color-orange) 2px;
		text-underline-offset: 5px;
	}

	a:hover {
		text-decoration: underline solid var(--primary-color-orange) 3px;
		text-underline-offset: 5px;
	}
</style>
