<script>
  import Flex from './Flex.svelte';
</script>

<Flex class="gridItem">
  <slot />
</Flex>

<style>
  :global(.gridItem) {
    --_GridItem-colspan: auto;
    --_GridItem-rowspan: auto;

    grid-row: span var(--GridItem-rowspan, var(--_GridItem-rowspan));
    grid-column: span var(--GridItem-colspan, var(--_GridItem-colspan));
  }
</style>
