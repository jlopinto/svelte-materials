<script type="ts">
  import { mediaBlock } from './MediaBlock.css';
  import { sprinkles } from '$lib/styles/utilities.css';

  const { class: userClass = '', ...restProps } = $$restProps;

  export let alignItems: 'center' | 'end' | 'start' = 'start';
</script>

<div
  class="{mediaBlock({
    alignItems
  })} {userClass}"
  {...restProps}
>
  <slot name="start" />
  <div class={sprinkles({ flex: '1' })}><slot /></div>
  <slot name="end" />
</div>
