<script>
	import { page } from "$app/stores"

	$: path = $page.url.pathname
</script>

<nav class="navbar">
	<div class="container">
		<a class="navbar-brand" href="/">ADAM BELKO</a>
		<ul class="navbar-nav">
			<li class={path === "/about" ? "nav-link active" : "nav-link"}>
				<a href="/about" class="nav-link">ABOUT</a>
			</li>
			<li class={path === "/posts" ? "nav-link active" : "nav-link"}>
				<a href="/posts" class="nav-link">POSTS</a>
			</li>
			<li class={path === "/contact" ? "nav-link active" : "nav-link"}>
				<a href="/contact" class="nav-link">CONTACT</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	.navbar {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--nav-bg-color);
		flex-wrap: nowrap;
		min-height: 125px;
	}

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1100px;
		width: 100%;
		padding: 0 12px;
	}

	.navbar-brand {
		font-size: 1.3em;
		font-weight: bold;
		padding-right: 30px;
	}

	.navbar-nav {
		display: flex;
		gap: 2.2em;
		font-size: 0.8em;
		font-weight: 600;
	}

	.active {
		text-decoration: underline solid var(--primary-color-orange) 2px;
		text-underline-offset: 5px;
	}

	@media (max-width: 480px) {
		.navbar-brand {
			font-size: 1.2em;
		}

		.navbar-nav {
			display: flex;
			gap: 1em;
			font-size: 0.75em;
		}
	}
</style>
