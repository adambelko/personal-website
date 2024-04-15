<script>
    import "$lib/styles/main.css"
    import Nav from "./Nav.svelte"
    import Footer from "./Footer.svelte"
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


