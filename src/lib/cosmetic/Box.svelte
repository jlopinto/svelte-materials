<script>
  import { sprinkles } from '$lib/styles/utilities.css';
</script>

<div
  class={sprinkles({
    backgroundColor: 'active300',
    padding: '4'
  })}
>
  <slot />
</div>
