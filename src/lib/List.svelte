<script type="ts">
  import { cleanClass } from 'svelte-materials';
  export let type: 'ordered' | 'unordered' = 'unordered';
  export let flow: 'inline' | 'block' = 'inline';
  export let list: HTMLElement = null;
  export let unstyled = false;
  export let scrollable = false;

  const { class: userClass, ...restProps } = $$restProps;
  const classNames = cleanClass([
    'track',
    flow,
    unstyled ? 'unstyled' : '',
    scrollable ? 'scrollable unstyled' : '',
    userClass
  ]);
</script>

{#if type === 'ordered'}
  <ol bind:this={list} class={classNames} {...restProps}>
    <slot />
  </ol>
{:else}
  <ul bind:this={list} class={classNames} {...restProps}>
    <slot />
  </ul>
{/if}

<style>
  ul,
  ol {
    display: flex;
    flex-direction: column;
    max-height: var(--track-height, auto);
    gap: var(--gap, 0);
  }

  .inline {
    flex-direction: row;
  }

  .unstyled {
    margin-block: 0;
    list-style: none;
    padding-inline-start: 0;
  }

  .scrollable {
    flex-wrap: nowrap;
    scrollbar-width: var(--scrollbar-width, thin);
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  .scrollable.block {
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-snap-type: var(--block-scroll-snap, block proximity);
  }

  .scrollable :global(> *) {
    scroll-snap-align: start;
  }

  .scrollable.inline {
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-snap-type: var(--inline-scroll-snap, inline proximity);
  }
</style>
