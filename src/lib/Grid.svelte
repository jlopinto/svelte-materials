<script type="ts">
  import { sprinkles } from './styles/utilities.css';

  export let columns: any = '12';
  export let rows: any = '1';
  export let gap: any = '4x';
</script>

<h3>Debug</h3>
<pre>
- columns setup: {JSON.stringify(columns)}
- rows setup: {JSON.stringify(rows)}
- gap setup: {JSON.stringify(gap)}
</pre>
<div
  class={sprinkles({
    display: 'grid',
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
    gap: gap
  })}
>
  <slot />
</div>
