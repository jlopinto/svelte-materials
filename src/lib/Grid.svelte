<script type="ts">
  import { sprinkles } from './styles/utilities.css';

  export let columns: any = 'fit';
  export let rows: any = null;
  export let gap: any = null;
  export let autoCol: any = null;
  export let autoRow: any = null;
</script>

<div
  class={sprinkles({
    display: 'grid',
    gridAutoColumns: autoCol,
    gridAutoRows: autoRow,
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
    gap: gap
  })}
>
  <slot />
</div>
