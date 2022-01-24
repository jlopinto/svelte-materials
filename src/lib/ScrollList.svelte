<script type="ts">
	export let activeItem = 0;
	export let flow: 'inline' | 'block' = 'inline';
	export let scrollBehaviour = {};

	const scrollBehaviourDefault = {
		behavior: 'smooth',
		block: 'nearest',
		inline: 'center'
	};

	let track;
	let directionClass = flow === 'block' ? 'block' : 'inline';

	export const list = {
		activeItem,
		goto: async (index, scroll = true) => {
			activeItem = Math.max(0, Math.min(index, track.children.length));
			if (scroll) {
				track.children[activeItem].scrollIntoView({
					...scrollBehaviourDefault,
					...scrollBehaviour
				});
			}
		}
	};
</script>

<div {...$$restProps}>
	<slot name="before" />
	<ul class={directionClass} bind:this={track}>
		<slot />
	</ul>
	<slot name="after" />
</div>

<style>
	div {
		position: relative;
	}

	ul {
		display: flex;
		flex-wrap: nowrap;
		scrollbar-width: var(--scrollbar-width, thin);
		max-height: var(--track-height, auto);
		gap: var(--gap, 0);
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
