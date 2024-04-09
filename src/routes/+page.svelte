<div class="intro-container">
    <h1 class="intro-h1">
        <span class="intro-medium-font">Hey, I'm Adam</span>
        <span class="intro-highlighted">Front End Developer</span>
        <span>I build things for the web</span>
        <span class="intro-small-font">And I love the process of turning coffee into a code, one line at a time!</span>
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

    .intro-highlighted {
        color: var(--primary-color-orange)
    }

    .intro-small-font {
        font-size: var(--font-default-size);
        padding-top: 2.5rem;
        max-width: 50%;
        text-align: center;
        line-height: 1.6em;
    }

    .intro-medium-font {
        font-size: 0.5em;
    }

    .btn-contact-me {
        font-size: 1.2em;
        font-weight: bold;
        padding: 0.8rem;
        background-color: var(--primary-color-orange);
        border: 3px solid black;
        cursor: pointer;
    }
</style>