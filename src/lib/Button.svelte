<script type="ts">
  export let label: string = null;
  export let busy = false;
</script>

<button on:click class:busy {...$$restProps}>
  <slot name="before" />
  {label ?? ''}
  <slot />
  <slot name="after" />
</button>

<style>
  button {
    --_radius: var(--controls-radius);
    --_color: var(--controls-color);
    --_background: var(--controls-background);
    --_background-light: var(--controls-background);
    --_background-deep: var(--controls-background);
    --_border: var(--controls-border);
    --_transition: var(--controls-transition);
    --_padding: var(--controls-padding);
    --_lineHeight: var(--controls-lineHeight);
    --_fontSize: var(--controls-fontSize);
    --_cursor: var(--controls-cursor);

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
