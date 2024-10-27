<script>
	import PostList from "$lib/components/PostList.svelte"
	import TagList from "$lib/components/TagList.svelte"

	let { data } = $props()
</script>

<svelte:head>
	<title>Posts</title>
</svelte:head>

<div class="container">
	<div class="page-container">
		<div class="inside-container">
			<h1>My posts</h1>
			<TagList tagList={data.tagList} />
		</div>
		<PostList postList={data.postList} />
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		padding: 0 12px;
	}

	.page-container {
		display: flex;
		flex-direction: column;
		max-width: 860px;
		align-items: center;
		margin: auto;
	}

	h1 {
		margin-bottom: 1em;
	}

	.inside-container {
		align-self: flex-start;
	}

	/* Responsive styles */
	@media (max-width: 880px) {
		h1 {
			font-size: 2.8rem;
		}
	}
</style>
