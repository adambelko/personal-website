<svelte:head>
	<title>About - Adam Belko</title>
</svelte:head>

<div class="about-container">
	<div class="intro-container">
		<div class="intro-text-area">
			<h1 class="about-h1">About me</h1>
			<div class="about-content">
				<div class="about-content-text">
					<p>
						Hey, I'm a Software Developer by background based in Sydney, now exploring the world of SEO,
						AEO, and GEO.
					</p>
					<br />
					<p>
						My background in web development taught me to look beyond how a website works under the hood.
						I’m now applying that same curiosity to search, from technical SEO and site structure to
						understanding data and user behaviour. I enjoy digging into problems, learning by doing, and
						figuring out what makes websites perform better.
					</p>
					<br />
				</div>
				<div class="intro-img-container">
					<img src="/adam-belko-profile-photo.jpg" alt="Portrait of Adam Belko" />
				</div>
			</div>
		</div>
	</div>

	<div class="about-table">
		<div class="about-table-item">
			<p>A few technologies I’ve been working with recently:</p>
			<ul class="about-table-list">
				<li>GSC & GA4</li>
				<li>Screaming Frog</li>
				<li>Javascript (ES6+)</li>
				<li>Typescript</li>
				<li>React and Next</li>
				<li>Svelte and SvelteKit</li>
				<li>Node and Express</li>
				<li>MongoDB, PostgreSQL</li>
				<li>Git</li>
				<li>GitHub</li>
			</ul>
		</div>
		<div class="about-table-item about-table-item-right-side">
			<p>Things I like to do:</p>
			<ul class="about-table-list">
				<li>Go for a surf</li>
				<li>Outdoor stuff</li>
				<li>Learn new things</li>
				<li>Daily stretch and exercise</li>
				<li>Listen to a podcasts</li>
				<li>Tell bad jokes</li>
			</ul>
		</div>
	</div>

	<div class="experience-container section">
		<h2>Where I've been</h2>
		<div class="experience-item section-item">
			<div class="experience-item-company">
				<img src="/archamoney_logo.jpeg" alt="archa" />
				<span>Archa</span>
			</div>
			<div class="experience-item-position">Front End Developer</div>
		</div>
	</div>

	<div class="section">
		<h2>What people say</h2>
		<div class="references-container">
			<div class="reference section-item">
				<p class="reference-body">
					"In the time that we've worked together, I've been impressed by Adam's eagerness to learn and grow.
					Despite being early in his career, Adam has a solid foundation in front-end technologies such as
					JavaScript, TypeScript, React, and NextJS and a genuine passion for the future development of his
					skills. What sets Adam apart is his curiosity and proactive approach to challenges. Adam is not
					afraid to ask questions, seek guidance, and dive into new concepts headfirst."
				</p>
				<div class="reference-footer">
					<img src="/Lukas-Aron.jpeg" alt="lukas-aron" />
					<div class="reference-footer-text">
						<span>Lukas Aron</span>
						<span>CTO at Archa</span>
					</div>
				</div>
			</div>

			<div class="reference section-item">
				<p class="reference-body">
					"Adam's dedication to learning and his friendly, honest nature have made him a valuable asset to our
					team. He approaches every task with enthusiasm and is always eager to expand his skill set. Adam's
					positive attitude and professionalism make him a pleasure to work with. I have no doubt he will
					excel in his future endeavours and highly recommend him to any prospective employer."
				</p>
				<div class="reference-footer">
					<img src="/Joe-Chance.jpeg" alt="joe-chance" />
					<div class="reference-footer-text">
						<span>Joe Chance</span>
						<span>Senior Software Engineer at Archa</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.about-container {
		display: flex;
		flex-direction: column;
		padding: 0 12px;
	}

	.intro-container {
		margin-bottom: 2em;
	}

	.intro-text-area {
		width: 100%;
		padding-top: 20px;
	}

	.about-content {
		display: flex;
		gap: 40px;
		width: 100%;
	}

	.about-content-text,
	.intro-img-container {
		flex: 1 1 0;
		min-width: 0;
	}

	.intro-img-container {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.intro-img-container img {
		display: block;
		width: 70%;
		height: auto;
		object-fit: contain;
		border-radius: 8px;
	}

	.about-h1 {
		padding-bottom: 0.4em;
	}

	.intro-text-area p {
		font-size: 1.2rem;
		line-height: 1.5em;
	}

	.about-table {
		display: flex;
		border: 2px solid var(--hr-dividor-color);
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
		border-radius: 0.5rem;
	}

	.about-table-item {
		padding: 2.8em;
	}

	.about-table-item p {
		font-weight: bold;
	}

	.about-table-item-right-side {
		background-color: var(--nav-bg-color);
		border-left: 2px solid var(--hr-dividor-color);
	}

	.about-table-list {
		display: grid;
		grid-template-columns: repeat(2, minmax(200px, 270px));
		list-style: disc;
		font-size: 1em;
		font-weight: 400;
		line-height: 1.5em;
		margin-top: 1em;
		padding-left: 1.5em;
	}

	.section {
		display: flex;
		flex-direction: column;
		margin-top: 6em;
	}

	.section h2 {
		margin-bottom: 1em;
		font-size: 2.2rem;
	}

	.section-item {
		display: flex;
		flex-direction: column;
		border: 2px solid var(--hr-dividor-color);
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
		border-radius: 0.5rem;
		padding: 2.8em;
		gap: 1em;
	}

	.experience-container {
		width: 50%;
	}

	.experience-item {
		background-color: var(--nav-bg-color);
	}

	.experience-item img {
		width: 50px;
		height: auto;
		border-radius: 5px;
	}

	.experience-item-company {
		display: flex;
		align-items: center;
		gap: 0.7em;
		font-size: 1.4rem;
		font-weight: bold;
	}

	.references-container {
		display: flex;
		gap: 1rem;
		line-height: 1.5rem;
	}

	.reference {
		justify-content: space-between;
		max-width: 50%;
		width: 50%;
	}

	.reference-footer img {
		width: 50px;
		height: 50px;
		border-radius: 5rem;
	}

	.reference-footer {
		display: flex;
		gap: 0.8rem;
	}

	.reference-footer-text {
		display: flex;
		flex-direction: column;
	}

	/* Responsive styles */
	@media (max-width: 1080px) {
		.about-table-item {
			width: 100%;
		}

		.about-table-list {
			grid-template-columns: 1fr;
		}

		.section {
			margin-top: 4em;
		}

		.section h2 {
			font-size: 1.8rem;
		}

		.section-item {
			padding: 2em;
		}
	}

	@media (max-width: 860px) {
		.about-h1 {
			font-size: 2.8rem;
		}

		.intro-text-area p {
			font-size: 1rem;
		}

		.about-table {
			flex-direction: column;
		}

		.about-table-item {
			width: auto;
		}

		.about-table-item-right-side {
			border-left: none;
			border-top: 2px solid var(--hr-dividor-color);
		}

		.about-table-item p {
			font-size: 1rem;
		}

		.about-table-list {
			font-size: 0.9em;
		}

		.experience-container,
		.section {
			width: 100%;
		}

		.section h2 {
			font-size: 1.6rem;
		}

		.section-item {
			padding: 1.5em;
		}

		.references-container {
			flex-direction: column;
			width: 100%;
		}

		.reference {
			width: 100%;
			max-width: 100%;
		}
	}

	/* Stack intro text and image on mobile */
	@media (max-width: 768px) {
		.about-content {
			flex-direction: column;
			gap: 24px;
		}

		.about-content-text,
		.intro-img-container {
			width: 100%;
			flex: none;
		}

		.intro-img-container img {
			width: 70%;
			max-width: 300px;
		}
	}
</style>
