<script>
  import { sprinkles } from '$lib/styles/utilities.css';
  import { style } from '@vanilla-extract/css';
  import { backgrounds } from 'polished';

  export let active = false;
</script>

<div
  on:click
  {...$$restProps}
  class={sprinkles({
    width: '8',
    height: '8',
    backgroundColor: active ? 'blue200' : 'active200',
    borderRadius: 'full',
    boxShadow: 'xl'
  })}
/>

<style>
</style>
