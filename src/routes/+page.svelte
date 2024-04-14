<svelte:head>
    <title>Adam Belko</title>
</svelte:head>

<div class="intro-container">
    <div class="intro-text">
        <span class="intro-text-medium-font">Hey, I'm Adam</span>
        <h1 class="intro-text-h1">
            <span class="intro-text-highlighted">Front End Developer</span>
            <span>I build things for the web</span>
        </h1>
        <p class="intro-text-small-font">And I love the process of turning coffee into a code, one line at a time!</p>
    </div>
    <a href="/about">
        <button class="btn-about-me">More About Me</button>
    </a>
</div>

<style>
    .intro-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .intro-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
    }

    .intro-text-h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
    }

    .intro-text-highlighted {
        color: var(--primary-color-orange)
    }

    .intro-text-small-font {
        font-size: var(--font-default-size);
        max-width: 50%;
        text-align: center;
        line-height: 1.6em;
        margin-bottom: 2rem;
    }

    .intro-text-medium-font {
        font-size: 2em;
        font-weight: bold;
        margin-bottom: 0.3rem;
    }

    .btn-about-me {
        font-size: 1.2em;
        font-weight: bold;
        padding: 0.8rem;
        background-color: var(--primary-color-orange);
        border: 3px solid black;
        cursor: pointer;
        transition: background-color 0.15s;
    }

    .btn-about-me:hover {
        background-color: #ffd426;
    }

    @media (max-width: 950px) {
        h1 {
            font-size: 2em;
        }
    }
</style>