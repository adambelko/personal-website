<div class="about-container">
    <div class="intro-container">
        <div class="intro-text-area">
            <h1 class="about-h1">About me</h1>
            <p>
                Hey, I'm Front End Developer based in Sydney with a passion for always learning something new.
            </p>
            <br>
            <p>
                Even though I don't have many years of experience under my belt, I am very passionate about technology and software, with a strong focus on code design, quality and
                reliability. I strive to build things users love, with a keen eye for the way products look and the
                interactions they offer.
            </p>
            <br>
        </div>
        <div class="intro-img-container">
            <img src="/adam-belko-dev-illustration.svg" alt="adam-belko-dev-illustration">
        </div>
    </div>

    <div class="about-table">
        <div class="about-table-item">
            <p>A few technologies I’ve been working with recently:</p>
            <ul class="about-table-list">
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
        <div class="about-table-item about-table-item-right-side">
            <p>Things I like to do:</p>
            <ul class="about-table-list">
                <li>Surfing</li>
                <li>Outdoor activities</li>
                <li>Learn new things</li>
                <li>Daily stretch and exercise</li>
                <li>Listen to podcasts</li>
                <li>Read a good book</li>
            </ul>
        </div>
    </div>

    <div class="experience">
        <h2>Where I've been</h2>
        <a href="https://www.archa.com.au/" target="_blank">
            <div class="experience-item">
                <div class="experience-item-company">
                    <img src="/archamoney_logo.jpeg" alt="archa">
                    <span>Archa</span>
                </div>
                <div class="experience-item-position">
                    Front End Developer
                </div>
            </div>
        </a>
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
        margin-bottom: 2em;
    }

    .intro-text-area {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding-top: 20px;
        padding-right: 12px;
    }

    .intro-img-container {
        padding-left: 12px;
        width: 50%;
    }

    .about-h1 {
        padding-bottom: 0.4em;
    }

    .intro-text-area p{
        font-size: 1.2rem;
        line-height: 1.5em;
    }

    .about-table {
        display: flex;
        border: 2px solid var(--hr-dividor-color);
        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
    }

    .about-table-item {
        padding: 3.5em;
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

    .experience {
        display: flex;
        flex-direction: column;
        margin-top: 6em;
        width: 50%;
    }

    .experience h2 {
        margin-bottom: 1em;
        font-size: 2.2rem;
    }

    .experience-item {
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 2.5em;
        background-color: var(--nav-bg-color);
        border: 2px solid var(--hr-dividor-color);
        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
        border-radius: 8px;
        transition: all .2s ease-in-out;
    }

    .experience-item:hover {
        transform: scale(1.02)
    }

    .experience-item img {
        width: 50px;
        border-radius: 5px;
    }

    .experience-item-company {
        display: flex;
        align-items: center;
        gap: 0.7em;
        font-size: 1.4rem;
        font-weight: bold;
    }
</style>