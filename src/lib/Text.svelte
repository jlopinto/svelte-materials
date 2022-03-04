<script>
  export let as = null;
  const props = { class: 'text' };
</script>

{#if as === 'p'}
  <p {...props}><slot /></p>
{/if}

{#if as === 'div'}
  <div {...props}><slot /></div>
{/if}

<style>
  .text {
  }
</style>
