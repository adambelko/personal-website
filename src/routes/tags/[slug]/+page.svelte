<script>
	import Icon from "@iconify/svelte"
	import PostList from "$lib/components/PostList.svelte"
	import TagList from "$lib/components/TagList.svelte"

	let { data } = $props()
</script>

<svelte:head>
	<title>Tags</title>
</svelte:head>

<div class="container">
	<div class="page-container">
		<h1>Filtered posts</h1>

		<div class="navigation">
			<Icon icon="lets-icons:arrow-left-long" width="1.3em" height="1.3em" style="color: black" />
			<a href="/posts">Go to all posts</a>
		</div>

		<TagList tagList={data.tagList} slug={data.slug} />
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

	/* Responsive styles */
	@media (max-width: 880px) {
		h1 {
			font-size: 2.8rem;
		}
	}
</style>
