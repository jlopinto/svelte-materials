<script type="ts">
  export let label = 'button_label';
  export let busy = false;
</script>

<button on:click {...$$restProps} class:busy>
  <slot name="before" />
  {label}
  <slot name="after" />
</button>

<style>
  button {
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius, 0.25rem);
    line-height: 1;
    background-color: var(--active-light);
    cursor: pointer;
    color: white;
    transition: var(--transition, all 0.1s ease-out);
  }

  button:not([disabled]):hover,
  button:not([disabled]):focus {
    background-color: var(--active);
    transition-timing-function: ease-in;
  }

  button:not([disabled]):active {
    background-color: var(--active-dark);
  }

  button[disabled] {
    background-color: var(--inactive);
    cursor: not-allowed;
  }

  .busy,
  .busy[disabled] {
    cursor: wait;
  }
</style>
