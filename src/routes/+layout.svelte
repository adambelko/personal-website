<script>
    // Styles import
    import "$lib/styles/main.css"

    // Svelte component imports
	import Analytics from "$lib/components/Analytics.svelte"
    import Nav from "$lib/components/Nav.svelte"
    import Footer from "$lib/components/Footer.svelte"
</script>

<Analytics />

<Nav />

<main>
    <slot />
</main>

<Footer />

<style>
    main {
        max-width: 1120px;
        width: 100%;
        margin: 4rem auto;
    }
</style>


