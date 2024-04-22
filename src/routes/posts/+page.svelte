<script>
	import PostList from "$lib/components/PostList.svelte"
	import TagList from "$lib/components/TagList.svelte"

    export let data
</script>

<div class="page-container">
<!--    <div class="search-container">-->
<!--        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">-->
<!--            <path fill="#212121" d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6" />-->
<!--        </svg>-->
<!--        <input class="search-input" placeholder="Search posts" type="search" bind:value={searchQuery} on:input={() => searchPosts(searchQuery)} />-->
<!--    </div>-->

    <h1>My posts</h1>
    <TagList tagList={data.tagList}/>
    <PostList postList={data.postList}/>
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

    /*.search-container {*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    border-radius: .5em;*/
    /*    margin-bottom: 1rem;*/
    /*    border: 2px solid var(--font-color-secondary-black);*/
    /*    width: 30%;*/
    /*}*/

    /*svg {*/
    /*    margin: .5em;*/
    /*}*/


    /*.search-input {*/
    /*    font-size: 1.5rem;*/
    /*    padding: 0.2em;*/
    /*    width: 100%;*/
    /*    border: none;*/
    /*}*/
</style>