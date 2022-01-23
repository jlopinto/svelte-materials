<script type="ts">
	export let name = '';
	export let active = false;
</script>

<div class:active>Hello {name}</div>

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
