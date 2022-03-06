<div><slot /></div>

<style lang="postcss">
  div {
    --_Grid-rows: auto;
    --_Grid-cols: 1;
    --_Grid-auto-flow: row;
    --_Grid-gap: var(--size-2);

    display: grid;
    grid-template-columns: repeat(var(--Grid-cols, var(--_Grid-cols)), minmax(0, 1fr));
    grid-template-rows: repeat(var(--Grid-rows, var(--_Grid-rows)), minmax(0, 1fr));
    grid-auto-flow: var(--Grid-auto-flow, var(--_Grid-auto-flow));
    gap: var(--Grid-gap, var(--_Grid-gap));
  }
</style>
