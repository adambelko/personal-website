<script>
	import "$lib/styles/main.css"
	import {fade} from "svelte/transition"
	import Analytics from "$lib/components/Analytics.svelte"
	import Nav from "$lib/components/Nav.svelte"
	import Footer from "$lib/components/Footer.svelte"

	export let data
	const transitionDuration = 150
</script>

<Analytics />

<Nav />

<main>
    {#key data.url}
        <div
            in:fade={{ duration: transitionDuration, delay: transitionDuration }}
            out:fade={{ duration: transitionDuration }}
        >
            <slot />
        </div>
    {/key}
</main>

<Footer />

<style>
    main {
        display: flex;
        flex-direction: column;
        flex: 1;
        width: 100%;
        max-width: 1100px;
        margin: 4rem auto;
    }
</style>
