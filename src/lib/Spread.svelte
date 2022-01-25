<script>
	const { class: userClass = '', ...restProps } = $$restProps;
</script>

<div class="root {userClass}" {...restProps}>
	<slot />
	<div class="footer">
		<slot name="footer" />
	</div>
</div>

<style>
	.root {
		display: flex;
		flex-direction: column;
		min-height: var(--min-height, 100vh);
	}

	.footer {
		margin-block-start: auto;
	}
</style>
