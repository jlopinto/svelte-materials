<script>
	const { class: userClass = '', ...restProps } = $$restProps;
</script>

<div class="root {userClass}" {...restProps}>
	<slot name="start" />
	<div class="body"><slot /></div>
	<slot name="end" />
</div>

<style>
	.root {
		display: flex;
		align-items: var(--align-items, start);
	}

	.body {
		flex: 1;
	}
</style>
