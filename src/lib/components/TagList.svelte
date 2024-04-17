<script>
	export let tagList
</script>

<div class="tag-list">

    {#each tagList as tag}
        <a href="/tags/{tag.slug.current}">
            <div class="tag">{tag.title}</div>
        </a>
    {/each}
</div>

<style>
    .tag-list {
        display: flex;
        gap: .6rem;
        margin-bottom: 2rem;
    }

    .tag {
        padding: .3em 1.2em;
        background-color: var(--primary-color-orange);
        border: 2px solid var(--font-color-primary-black);
        border-radius: .8em;
    }

    .tag:hover {
        background-color: var(--primary-color-orange-hover);
    }
</style>