<script>
	import { StickyFooter } from 'svelte-materials';
</script>

<StickyFooter class="h-200" --min-height="100%">
	Some card content
	<div slot="footer">card footer content</div>
</StickyFooter>

<style>
	:global(.h-200) {
		height: 200px;
	}
</style>
