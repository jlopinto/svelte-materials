<script type="ts">
	import { tick } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	export let items = [];
	export let activeItem = 1;
	export let flow = 'inline';
	export let scrollBehaviour = {
		behavior: 'smooth',
		block: 'nearest',
		inline: 'center'
	} as ScrollIntoViewOptions;

	const { class: userClass = '', ...restProps } = $$restProps;
	const dispatch = createEventDispatcher();
	let track: HTMLElement;
	let directionClass = flow === 'block' ? 'block' : 'inline';

	const goto = async (index, scroll = false) => {
		await tick();
		activeItem = Math.max(Math.min(index, items.length), 1);
		if (scroll) {
			const activeElem = track.childNodes.item(activeItem - 1) as HTMLElement;
			activeElem.scrollIntoView(scrollBehaviour);
		}
	};

	export const carousel = {
		prev: (scroll = false) => goto(activeItem - 1, scroll),
		next: (scroll = false) => goto(activeItem + 1, scroll),
		activeItem,
		goto
	};
</script>

<div class="scrollList {userClass}" {...restProps}>
	<slot name="before" />
	<ol class="track {directionClass}" bind:this={track}>
		{#each items as item, i}
			<li on:click={() => dispatch('selection', i + 1)}>
				<svelte:component this={item.component} {...item.props} active={activeItem === i + 1} />
			</li>
		{/each}
	</ol>
	<slot name="after" />
</div>

<style>
	.scrollList {
		position: relative;
	}

	ol {
		list-style: none;
		margin-block: 0;
		display: flex;
		scrollbar-width: var(--carousel-scrollbar-width, thin);
		max-height: var(--carousel-height, auto);
		padding-inline: var(--carousel-gap, 0);
		gap: var(--carousel-gap, 0);
	}

	.block {
		flex-direction: column;
		overflow-y: scroll;
		overflow-x: hidden;
	}

	.inline {
		overflow-y: hidden;
		overflow-x: scroll;
	}
</style>
