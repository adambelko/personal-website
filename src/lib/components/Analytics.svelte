<script>
	import { page } from "$app/stores"

	$effect(() => {
		if (typeof gtag !== "undefined") {
			gtag("config", "MEASUREMENT_ID", {
				page_title: document.title,
				page_path: $page.url.pathname
			})
		}
	})
</script>

<svelte:head>
	<!--	Google analytics-->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-YHNF7ZVTRG"></script>
	<script>
		window.dataLayer = window.dataLayer || []

		function gtag() {
			dataLayer.push(arguments)
		}

		gtag("js", new Date())

		gtag("config", "G-YHNF7ZVTRG")
	</script>

	<!--	Umami analytics-->
	<script
		defer
		src="https://cloud.umami.is/script.js"
		data-website-id="7cb7f15e-6025-4099-930e-ff8601709f53"
	></script>
</svelte:head>
