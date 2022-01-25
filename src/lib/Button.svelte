<script type="ts">
	export let label = 'button_label';
</script>

<button on:click {...$$restProps}>
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
		transition: var(--transition, all .1s ease-out);
	}

	button:hover,
	button:focus {
		background-color: var(--active);
        transition-timing-function: ease-in;
	}

    button:active {
		background-color: var(--active-dark);
    }
</style>
