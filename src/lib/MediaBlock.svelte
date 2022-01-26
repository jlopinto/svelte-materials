<script type="ts">
  import { root, rootType } from './MediaBlock.css';
  import { flex1 } from '$lib/styles/utilities.css';
  const { class: userClass = '', ...restProps } = $$restProps;
  export let variant: rootType = {
    alignItems: 'start'
  };
</script>

<div class="{root(variant)} {userClass}" {...restProps}>
  <slot name="start" />
  <div class={flex1}><slot /></div>
  <slot name="end" />
</div>
