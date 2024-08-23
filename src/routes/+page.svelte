<script>
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
		<span class="text-area-medium-font">Hey, I'm Adam</span>
		<h1 class="text-area-h1">
			<span class="text-area-highlighted">Front End Developer</span>
			<span>I build things for the web</span>
		</h1>
		<p class="text-area-small-font">
			And I love the process of turning coffee into a code, one line at a time!
		</p>
	</div>
	<a href="/about">
		<button class="intro-btn">More About Me</button>
	</a>
</div>

<div class="recent-posts-container">
	<h2>Recent posts</h2>

	<PostList postList={data.postList} />

	<div class="navigation">
		<a href="/posts">See all posts</a>
		<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24">
			<g fill="none">
				<path
					stroke="#212121"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M17 12H3"
				/>
				<path
					fill="#212121"
					d="m21.715 11.797l-5.45-3.893a.8.8 0 0 0-1.265.65v6.891a.8.8 0 0 0 1.265.651l5.45-3.893a.25.25 0 0 0 0-.406"
				/>
			</g>
		</svg>
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
