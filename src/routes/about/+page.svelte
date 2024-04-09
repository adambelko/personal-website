<div class="about-container">
    <div class="intro-container">
        <div class="into-text-container">
            <h1 class="about-h1">Who Is Adam Belko?</h1>
            <p>Hey there! Put simply, I enjoy making things for the web, specialising in Front-End side of
                development.</p>
            <br>
            <p>When it comes to learning new technologies, my approach typically goes like this: read docs, experiment
                (build projects), hitting issues, and then solving them. In other words I believe reading books or
                watching YouTube tutorials only get you so far.</p>
        </div>
        <div class="into-img-container">
            <img src="/my-profile-photo.jpeg" alt="adam-belko">
        </div>
    </div>
</div>

<style>
    .about-container {
        display: flex;
        flex-direction: column;
        max-width: 960px;
        margin: 3rem auto 0 auto;
    }

    .intro-container {
        display: flex;
    }

    .into-text-container {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 20px 12px;
    }

    .into-img-container {
        padding: 0 12px;
    }

    .about-h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 4.4em;
        font-weight: bold;
        padding-bottom: 0.4em;
    }

    .into-text-container p {
        font-size: 1.2em;
        font-weight: 500;
        line-height: 1.5em;
    }

</style>