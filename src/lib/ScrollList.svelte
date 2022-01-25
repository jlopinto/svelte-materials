<script type="ts">
	import List from '$lib/List.svelte';

	export let activeItem = 0;
	export let scrollBehaviour = {};

	const scrollBehaviourDefault = {
		behavior: 'smooth',
		block: 'nearest',
		inline: 'center'
	};

	let track;

	export const list = {
		activeItem,
		goto: (index, scroll = true) => {
			activeItem = Math.max(0, Math.min(index, track.children.length - 1));
			if (scroll) {
				track.children[activeItem].scrollIntoView({
					...scrollBehaviourDefault,
					...scrollBehaviour
				});
			}
		}
	};
</script>

<slot name="before" />
<List bind:list={track} scrollable {...$$restProps}>
	<slot />
</List>
<slot name="after" />
