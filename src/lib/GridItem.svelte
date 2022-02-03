<script type="ts">
  import { sprinkles } from './styles/utilities.css';

  export let colspan = null;
  export let rowspan = null;
  export let order = null;
</script>

<div
  class={sprinkles({
    display: 'grid',
    gridColumn: colspan,
    gridRow: rowspan,
    order: order
  })}
>
  <slot />
</div>
