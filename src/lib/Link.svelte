<script>
	export let href = '';
</script>

<a {href} {...$$restProps}>
	<slot name="before" />
	<slot />
	<slot name="after" />
</a>
