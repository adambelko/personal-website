<nav class="navbar">
    <div class="container">
        <a class="navbar-brand" href="/">ADAM BELKO</a>
        <ul class="nav navbar-nav">
            <li class="nav-item">
                <a href="/articles" class="nav-link">ARTICLES</a>
            </li>
            <li class="nav-item">
                <a href="/contact" class="nav-link">CONTACT</a>
            </li>
            <li class="nav-item">
                <a href="/about" class="nav-link">ABOUT</a>
            </li>
        </ul>
    </div>
</nav>

<style>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FAFAFA;
        flex-wrap: nowrap;
        width: 100vw;
        height: 125px;
    }

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 960px;
        width: 100%;
        flex-wrap: inherit;
    }

    .navbar-brand {
        font-size: 1.3em;
        font-weight: bold;
    }

    .navbar-nav {
        display: flex;
        gap: 1em;
        font-size: 0.8em;
        font-weight: 600;
    }

    a {
        color: #323232;
    }
</style>