<script type="ts">
  // import { sprinkles } from './styles/utilities.css';
  import { onMount, createEventDispatcher } from 'svelte';
  import { Tweened, tweened } from 'svelte/motion';
  import { circInOut as defaultEase } from 'svelte/easing';
  import { cleanClass } from 'svelte-materials';

  export let isOpen = false;
  export let motion = {};
  export let collapsing = false;

  const dispatch = createEventDispatcher();
  const defaultMotion = {
    duration: 400,
    easing: defaultEase
  };

  let rootEl: HTMLElement;
  let contentEl: HTMLElement;
  let contentHeight: number;
  let progress: Tweened<number>;

  const getContentHeight = () => (contentHeight = contentEl.getBoundingClientRect().height);

  const collapse = (open = false) => {
    getContentHeight();

    if (!open) {
      progress.set(contentHeight, { duration: 0 });
      contentHeight = 0;
    }

    collapsing = true;
    dispatch('collapsing', { isOpen });

    progress.set(contentHeight).then(() => {
      isOpen = !isOpen;
      collapsing = false;
      rootEl.removeAttribute('style');
      dispatch('collapsed', { isOpen });
    });
  };

  onMount(() => {
    getContentHeight();

    progress = tweened(null, {
      ...defaultMotion,
      ...motion
    });

    progress.subscribe((v) => (rootEl.style.height = `${v}px`));
    progress.set(isOpen ? contentHeight : 0);
  });

  export const controls = {
    open: () => collapse(true),
    close: () => collapse()
  };
</script>

<div
  bind:this={rootEl}
>
  <div bind:this={contentEl}>
    <slot />
  </div>
</div>
