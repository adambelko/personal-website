<script>
	import "$lib/styles/main.css"
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
		display: flex;
		flex-direction: column;
		flex: 1;
		width: 100%;
		max-width: 1120px;
		margin: 4rem auto;
	}
</style>
