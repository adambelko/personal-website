<script>
    import "$lib/styles/main.css"
    import Nav from "$lib/components/Nav.svelte"
    import Footer from "$lib/components/Footer.svelte"
</script>

<Nav />

<main>
    <slot />
</main>

<Footer />

<style>
    main {
        max-width: 1280px;
        width: 100%;
        margin: 4rem auto;
    }
</style>


