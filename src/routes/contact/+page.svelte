<div class="contact-container">
    <h1 class="contact-h1">Let's get in touch</h1>
    <div class="secondary-text">
        <p>
            <a href="mailto:belkoadam@gmai.com" class="email">Pop me an email</a> at belkoadam@gmail.com
        </p>
        <p>or give me a shout on social media.</p>
    </div>
    <a href="https://www.linkedin.com/in/adam-belko/" target="_blank">
        <svg height="60" viewBox="0 0 100 100" width="60" xmlns="http://www.w3.org/2000/svg">
            <path d="m80.667 14h-61.352c-2.934 0-5.315 2.325-5.315 5.188v61.617c0 2.867 2.381 5.195 5.315 5.195h61.352c2.936 0 5.333-2.328 5.333-5.195v-61.617c0-2.863-2.397-5.188-5.333-5.188zm-45.313 61.354h-10.684v-34.359h10.684zm-5.342-39.057c-3.423 0-6.19-2.774-6.19-6.194 0-3.415 2.767-6.189 6.19-6.189 3.415 0 6.189 2.774 6.189 6.189 0 3.42-2.774 6.194-6.189 6.194zm45.338 39.057h-10.667v-16.708c0-3.986-.078-9.111-5.551-9.111-5.558 0-6.405 4.341-6.405 8.822v16.998h-10.675v-34.36h10.245v4.692h.146c1.426-2.7 4.91-5.549 10.106-5.549 10.806 0 12.802 7.114 12.802 16.369v18.847z"/>
        </svg>
    </a>
</div>

<style>
    .contact-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-h1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 4.4em;
        font-weight: bold;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    .secondary-text {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.2em;
        font-weight: 500;
        line-height: 1.5em;
        margin-bottom: 0.6rem;
    }

    .email {
        font-weight: bold;
        text-decoration: underline solid var(--primary-color-orange) 2px;
        text-underline-offset: 5px
    }

    svg {
        transition: fill 0.15s;
    }

    svg:hover {
        fill: #0A66C2;
    }
</style>