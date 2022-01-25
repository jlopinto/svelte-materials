<script type="ts">
	export let type: 'ordered' | 'unordered' = 'unordered';
	export let flow: 'inline' | 'block' = 'inline';
	export let list: HTMLElement = null;
	export let unstyled = false;
	export let scrollable = false;
	const classNames = [
		'track',
		flow,
		$$restProps?.class,
		unstyled ? 'unstyled' : '',
		scrollable ? 'scrollable unstyled' : ''
	].join(' ');
</script>

{#if type === 'ordered'}
	<ol bind:this={list} class={classNames} {...$$restProps}>
		<slot />
	</ol>
{:else}
	<ul bind:this={list} class={classNames} {...$$restProps}>
		<slot />
	</ul>
{/if}

<style>
	ul,
	ol {
		display: flex;
		max-height: var(--track-height, auto);
		gap: var(--gap, 0);
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
