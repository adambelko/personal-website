<script>
	import { urlFor } from "$lib/sanity/image"
	import { formatDate } from "$lib/helpers/date"
	import Icon from "@iconify/svelte"

	export let postList
</script>

<div class="post-list">
	{#each postList as post}
		<article class="post">
			<div class="post-img-container">
				<a href="/posts/{post.slug.current}">
					<img src={urlFor(post.titleImage).url()} alt={post.slug.current} />
				</a>
			</div>
			<div class="post-text-section">
				<div class="post-date-container">
					<Icon icon="wi:time-4" width="1.2em" height="1.2em" style="color: black" />
					<span>{formatDate(post._createdAt)}</span>
				</div>
				<a href="/posts/{post.slug.current}" class="post-title">{post.title}</a>
				<p class="post-description">{post.smallDescription}</p>
				{#if post.tags}
					<ul class="post-tag-list">
						{#each post.tags as tag}
							<li>
								<a href="/tags/{tag.slug.current}">
									<div class="post-tag">{tag.title}</div>
								</a>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</article>
	{/each}
</div>

<style>
	.post-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		width: 860px;
	}

	.post {
		display: flex;
		gap: 2em;
		padding: 1.8em;
		width: calc(860px - 3.6em);
		background-color: var(--nav-bg-color);
		border: 2px solid var(--hr-dividor-color);
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
		border-radius: 0.5rem;
	}

	.post-img-container {
		display: flex;
		align-items: center;
		flex-shrink: 0;
	}

	.post-img-container img {
		max-width: 280px;
		height: auto;
		border-radius: 0.5rem;
	}

	.post-text-section {
		display: flex;
		flex-direction: column;
		line-height: 1.3em;
	}

	.post-title {
		font-size: 1.6rem;
		font-weight: bold;
		line-height: 1.1em;
	}

	.post-description {
		margin: 1em 0;
	}

	.post-date-container {
		display: flex;
		align-items: center;
		gap: 0.2em;
		font-size: 0.9em;
		margin-bottom: 0.1em;
	}

	.post-tag-list {
		display: flex;
		gap: 0.5em;
	}

	.post-tag {
		font-size: 0.8rem;
		padding: 0.1em 0.8em;
		border-radius: 0.6em;
		background-color: var(--primary-color-orange);
		border: 2px solid var(--font-color-primary-black);
		transition: background-color 0.15s;
	}

	.post-tag:hover {
		background-color: var(--primary-color-orange-hover);
	}
</style>
