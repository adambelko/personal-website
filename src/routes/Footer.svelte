<footer class="footer">
    <hr>
    <div class="img-container">
        <a href="https://kit.svelte.dev/">
            <img src="/Svelte_Logo.png" alt="Svelte-Logo"/>
        </a>
    </div>
    <div class="footer-text">
        <span>BUILT WITH <a href="https://kit.svelte.dev/">SVELTEKIT</a></span>
        <span>BY <a href="https://github.com/adambelko">ADAM BELKO</a></span>
    </div>
</footer>

<style>
    .footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2rem;
    }

    hr {
        margin-top: 11em;
        margin-left: auto;
        margin-right: auto;
        max-width: 960px;
        width: 100%;
        border-top: 1px solid var(--hr-dividor-color);
    }

    .img-container img {
        max-width: 50px;
        margin-top: 4rem;
        margin-bottom: 2rem;
    }

    .footer-text {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        text-align: center;
        line-height: 1.8em;
    }

    a:hover {
        text-decoration: underline;
    }

</style>