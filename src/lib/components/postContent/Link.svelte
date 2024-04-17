<script>
  export let portableText

  $: ({ value } = portableText)
  console.log(value)
</script>

<div>
    <a href={value.url} class="link" target="_blank">
        <slot />
    </a>
</div>

<style>
    .link {
        text-decoration: underline solid var(--primary-color-orange) 2px;
        text-underline-offset: 5px
    }
</style>