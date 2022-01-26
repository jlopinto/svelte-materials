<script>
  import { Spread } from 'svelte-materials';
</script>

<Spread class="h-200" --min-height="100%">
  Some card content
  <div slot="footer">card footer content</div>
</Spread>

<style>
  :global(.h-200) {
    height: 200px;
  }
</style>
