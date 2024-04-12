<div class="about-container">
    <div class="intro-container">
        <div class="intro-text-container">
            <h1 class="about-h1">About me</h1>
            <p>
                Hey, I'm Front End Developer based in Sydney.
            </p>
            <br>
            <p>
                I am very passionate about technology and software, with a strong focus on code design, quality and
                reliability. I strive to build things users love, with a keen eye for the way products look and the
                interactions they offer.
            </p>
            <br>
        </div>
        <div class="into-img-container">
            <img src="/my-profile-photo.jpeg" alt="adam-belko">
        </div>
    </div>

    <div class="tech-stack-container">
        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul class="tech-stack-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React.js and Next.js</li>
            <li>Svelte and SvelteKit</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>GitHub</li>
        </ul>
    </div>
</div>

<style>
    .about-container {
        display: flex;
        flex-direction: column;
        padding: 0 12px;
    }

    .intro-container {
        display: flex;
    }

    .intro-text-container {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding-top: 20px;
        padding-right: 12px;
    }

    .into-img-container {
        padding-left: 12px;
    }

    .about-h1 {
        padding-bottom: 0.4em;
    }

    .intro-text-container p{
        font-size: 1.2em;
        line-height: 1.5em;
    }

    .tech-stack-container p {
        font-weight: bold;
    }

    .tech-stack-container {
        margin-top: 1.5em;
    }

    .tech-stack-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(200px, 270px));
        list-style: disc;
        font-size: 1em;
        font-weight: 400;
        line-height: 1.5em;
        margin-top: 1em;
        padding-left: 1.5em;
    }

</style>