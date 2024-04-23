<footer class="footer">
    <hr>
    <div class="footer-text">
        <span>BUILT BY <a href="https://github.com/adambelko/personal-website" target="_blank">ADAM BELKO</a></span>
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
        margin-top: 15rem;
        margin-left: auto;
        margin-right: auto;
        max-width: 1120px;
        width: 100%;
        border-top: 1px solid var(--hr-dividor-color);
    }

    .footer-text {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        text-align: center;
        line-height: 1.8em;
        margin-top: 2rem;
    }

    a:hover {
        text-decoration: underline solid var(--primary-color-orange) 3px;
        text-underline-offset: 5px
    }

</style>