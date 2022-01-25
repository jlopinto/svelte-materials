<script type="ts">
	export let name = '';
	export let active = false;
	const { class: className = '' } = $$restProps;
</script>

<div on:click class={className} class:active>Hello {name}</div>

<style>
	div {
		width: 8rem;
		text-align: center;
		padding: 1rem;
		border: 1px dashed #ccc;
	}

	div:hover {
		cursor: pointer;
	}

	.active {
		border-color: blueviolet;
	}
</style>
