<script>
    // Styles import
    import "$lib/styles/main.css"

    // Vercel analytics imports and setup
	import { dev } from '$app/environment'
	import { inject } from '@vercel/analytics'
	inject({ mode: dev ? 'development' : 'production' })

    // Svelte component imports
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


