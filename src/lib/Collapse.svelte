<script type="ts">
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let isOpen = false;

	let wrapper: HTMLElement;
	let contentHeight = 0;

	const progress = tweened(isOpen ? 0 : contentHeight, {
		duration: 300,
		easing: cubicOut
	});

	const open = () => {
		if (isOpen) return;
		isOpen = true;
		progress.set(contentHeight);
	};

	const close = () => {
		if (!isOpen) return;

		progress.set(0).then(() => {
			isOpen = false;
		});
	};

	onMount(() => {
		({ height: contentHeight } = wrapper.querySelector(':scope > *').getBoundingClientRect());
	});

	export const controls = {
        isOpen,
		open,
		close,
		toggle: () => {
			isOpen ? close() : open();
		}
	};
</script>

<div class="collapse" class:closed={!isOpen} bind:this={wrapper} style="height: {$progress}px">
	<slot />
</div>

<style>
	.collapse {
		overflow: hidden;
	}

	.closed {
		height: 0;
	}
</style>
