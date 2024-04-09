<div class="intro-container">
    <h1 class="intro-h1">
        <span class="intro-first-section">Front End Developer</span>
        <span class="intro-second-section">I build things for the web</span>
        <span class="intro-third-section">Hey, my name is Adam and I love the process of turning coffee into a code, one line at a time!</span>
    </h1>
    <a href="/contact">
        <button class="btn-contact-me">Get In Touch</button>
    </a>
</div>

<style>
    .intro-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .intro-h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 4.4em;
        font-weight: bold;
        padding-top: 6rem;
        padding-bottom: 3rem;
    }

    .intro-first-section {
        color: var(--primary-orange)
    }

    .intro-third-section {
        font-size: var(--font-default-size);
        font-weight: 500;
        padding-top: 2.5rem;
        max-width: 50%;
        text-align: center;
        line-height: 1.6em;
    }

    .btn-contact-me {
        font-size: 1.2em;
        font-weight: bold;
        padding: 0.8rem;
        background-color: var(--primary-orange);
        border: 3px solid black;
        cursor: pointer;
    }
</style>