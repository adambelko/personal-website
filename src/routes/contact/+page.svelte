<script>
	import Icon from "@iconify/svelte"
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="contact-container">
	<h1>Let's get in touch</h1>
	<div class="secondary-text">
		<p>
			<a href="mailto:belkoadam@gmai.com" class="email">Pop me an email</a> at belkoadam@gmail.com
		</p>
		<p>or give me a shout on social media.</p>
	</div>
	<div class="platforms">
		<a href="https://www.linkedin.com/in/adam-belko/" target="_blank">
			<Icon icon="mdi:linkedin" width="60" height="60" style="color: black" />
		</a>
		<a href="https://github.com/adambelko" target="_blank">
			<Icon icon="mdi:github" width="55" height="55" style="color: black" class="icon" />
		</a>
	</div>
</div>

<style>
	.contact-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 0 12px;
	}

	h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.secondary-text {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 1.2em;
		font-weight: 500;
		line-height: 1.5em;
		margin-bottom: 1.5rem;
	}

	.email {
		font-weight: bold;
		text-decoration: underline solid var(--primary-color-orange) 2px;
		text-underline-offset: 5px;
	}

	.email:hover {
		text-decoration: underline solid var(--primary-color-orange) 3px;
		text-underline-offset: 5px;
	}

	.platforms {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	/* Responsive styles */
	@media (max-width: 880px) {
		h1 {
			font-size: 2.8rem;
		}

		.secondary-text {
			font-size: 1.1em;
		}

		.platforms {
			gap: 1rem;
		}
	}
</style>
