<script>
	export let tagList
	export let slug = ""

	$: getTagClass = tag => tag.slug.current === slug ? "selectedTag" : ""

</script>

<ul class="tag-list">
    {#each tagList as tag}
            <li class={`${getTagClass(tag)} tag`}>
                <a href="/tags/{tag.slug.current}">{tag.title}</a>
            </li>
    {/each}
</ul>

<style>
    .tag-list {
        display: flex;
        gap: .6rem;
        margin-bottom: 2rem;
    }

    .tag {
        padding: .3em 1.2em;
        border-radius: .6em;
        background-color: var(--primary-color-orange);
        border: 2px solid var(--font-color-primary-black);
        transition: background-color 0.15s;
        cursor: pointer;
    }

    .tag:hover {
        background-color: var(--primary-color-orange-hover);
    }
    .selectedTag,
    .selectedTag:hover {
        background-color: #c09eec;
    }
</style>