<script type="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { cubicIn as motionEase } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { childsHeight } from '$lib/utils.ts';

	export let isOpen = false;
	export let motion = {};
	export let collapsing = false;

	const dispatch = createEventDispatcher();
	const defaultMotion = {
		duration: 100,
		easing: motionEase
	};

	let rootEl: HTMLElement;
	let contentHeight;
	let progress;

	const collapse = (verb: 'open' | 'close') => {
		contentHeight = childsHeight(rootEl);

		if (verb === 'close') {
			progress.set(contentHeight, { duration: 0 });
			contentHeight = 0;
		}
		collapsing = true;
		dispatch(`${verb}ing`, { isOpen });
		progress.set(contentHeight).then(() => {
			isOpen = !isOpen;
			collapsing = false;
			rootEl.removeAttribute('style');
			dispatch(`${verb}ed`, { isOpen });
		});
	};

	onMount(() => {
		contentHeight = childsHeight(rootEl);

		progress = tweened(null, {
			...defaultMotion,
			...motion
		});

		progress.subscribe((v) => (rootEl.style.height = `${v}px`));
		progress.set(isOpen ? contentHeight : 0);
	});

	export const controls = {
		open: () => collapse('open'),
		close: () => collapse('close')
	};
</script>

<div class:closed={!isOpen} bind:this={rootEl}>
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
