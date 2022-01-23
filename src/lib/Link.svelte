<script>
	export let href = '';
	const { class: classProps = '', ...restProps } = $$restProps;

	console.log($$props);
</script>

<a {href} class={classProps} {...restProps}>
	<slot name="before" />
	<slot />
	<slot name="after" />
</a>
