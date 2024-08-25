<script>
	import Icon from "@iconify/svelte"
	import PostList from "$lib/components/PostList.svelte"

	export let data
</script>

<svelte:head>
	<title>Adam Belko - Software Developer</title>
	<meta
		content="Hey! I'm a software developer passionate about technology, code quality, building things for the web,
	 creating user-friendly, aesthetically pleasing products."
	/>
</svelte:head>

<div class="intro-container">
	<div class="intro-text-area">
		<p class="text-area-medium-font">Hey, I'm Adam</p>
		<h1 class="text-area-h1">
			<span class="text-area-highlighted">Software Developer</span>
			<span>I build things for the web</span>
		</h1>
		<p class="text-area-small-font">And I love the process of turning coffee into a code, one line at a time!</p>
	</div>
	<a href="/about">
		<button class="intro-btn">
			About me
			<Icon icon="lets-icons:arrow-right-long" width="1.3em" height="1.3em" style="color: black" />
		</button>
	</a>
</div>

<div class="recent-posts-container">
	<h2>Recent posts</h2>

	<PostList postList={data.postList} />

	<div class="navigation">
		<a href="/posts">See all posts</a>
		<Icon icon="lets-icons:arrow-right-long" width="1.3em" height="1.3em" style="color: black" />
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
		color: var(--primary-color-orange);
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
		display: flex;
		align-items: center;
		gap: 0.3em;
		font-size: 1.2em;
		font-weight: bold;
		padding: 0.8rem;
		background-color: var(--primary-color-orange);
		border: 3px solid var(--font-color-primary-black);
		cursor: pointer;
		border-radius: 0.6rem;
		transition: background-color 0.15s;
	}

	.intro-btn:hover {
		background-color: var(--primary-color-orange-hover);
	}

	.recent-posts-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 10em;
	}

	.recent-posts-container h2 {
		display: flex;
		justify-content: center;
		margin-bottom: 1.5em;
	}

	.navigation {
		display: flex;
		align-items: center;
		gap: 0.3em;
		margin: 1.5rem auto;
		font-weight: bold;
		font-size: 1.3rem;
		text-underline-offset: 5px;
		text-decoration: underline solid var(--primary-color-orange) 2px;
	}

	.navigation:hover {
		text-decoration: underline solid var(--primary-color-orange) 3px;
	}
</style>
