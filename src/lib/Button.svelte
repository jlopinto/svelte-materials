<script type="ts">
  import { inlineCssVars } from '$lib/utils';
  export let label: string = null;
  export let busy = false;
  export let styles = {};

  $: cssVars = inlineCssVars(styles, '--Button');
</script>

<button on:click class:busy {...$$restProps} style={cssVars}>
  <slot name="before" />
  {label ?? ''}
  <slot />
  <slot name="after" />
</button>

<style>
  button {
    --_radius: var(--radius-1);
    --_color: var(--violet-1);
    --_background: var(--violet-4);
    --_border: var(--border-size-2);
    --_transition: var(--ease-in-2);
    --_padding: 0.5em;
    --_lineHeight: 1;
    --_fontSize: 1rem;
    --_cursor: pointer;

    padding: var(--Button-padding, var(--_padding));
    border-radius: var(--Button-radius, var(--_radius));
    font-size: var(--Button-fontSize, var(--_fontSize));
    line-height: var(--Button-lineHeight, var(--_lineHeight));
    background: var(--Button-background, var(--_background));
    border: var(--Button-border, var(--_border));
    color: var(--Button-color, var(--_color));
    transition: var(--Button-transition, var(--_transition));
    cursor: var(--Button-cursor, var(--_cursor));
  }

  button:not([disabled]):hover,
  button:not([disabled]):focus {
    --Button-background: var(--violet-8);
  }

  button:not([disabled]):active {
    --Button-background: var(--violet-5);
  }

  button[disabled] {
    --Button-background: var(--violet-3);
    --Button-cursor: not-allowed;
  }

  .busy,
  .busy[disabled] {
    --Button-cursor: wait;
  }
</style>
