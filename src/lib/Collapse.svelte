<script type="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { elemChildsHeightSum } from '$lib/utils.ts';

	export let isOpen = false;
	export let motion = {};

	const dispatch = createEventDispatcher();
	const defaultMotion = {
		duration: 200,
		easing: cubicOut
	};

	let rootEl: HTMLElement;
	let contentHeight;
	let progress;
	let updating = false;

	const collapse = (goal, verb) => {
		contentHeight = elemChildsHeightSum(rootEl);
		dispatch(`${verb}ing`, { isOpen });
		isOpen = !isOpen;
		updating = true;
		progress.set(goal).then(() => {
			updating = false;
			rootEl.removeAttribute('style');
			dispatch(`${verb}ed`, { isOpen });
		});
	};

	onMount(() => {
		contentHeight = elemChildsHeightSum(rootEl);

		progress = tweened(null, {
			...defaultMotion,
			...motion
		});

		progress.subscribe((v) => (rootEl.style.height = `${v}px`));
		progress.set(isOpen ? contentHeight : 0);
	});

	export const controls = {
		open: () => collapse(contentHeight, 'open'),
		close: () => collapse(0, 'open')
	};
</script>

<div class:closed={!updating && !isOpen} bind:this={rootEl}>
	<slot />
</div>

<style>
	div {
		overflow: hidden;
	}

	.closed {
		height: 0;
	}
</style>
