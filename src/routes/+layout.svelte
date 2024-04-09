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

