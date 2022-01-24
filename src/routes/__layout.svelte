<script lang="ts">
	import { ScrollList } from 'svelte-materials';
	import { MediaBlock, StickyFooter, Link, Ul } from 'svelte-materials';
	import '../app.css';
</script>

<StickyFooter>
	<header>
		<div class="container">
			<MediaBlock --align-items="center" class="py">
				<h1 slot="start" class="mr">svelte-materials</h1>
				<div>Reduction de composants, à la sauce svelte</div>
			</MediaBlock>
		</div>
	</header>
	<div class="container">
		<div class="layout">
			<nav>
				<ol>
					<li><a href="/">Home</a></li>
					<li><a href="/components/scrollList">ScrollList</a></li>
					<li><a href="/components/mediaBlock">MediaBlock</a></li>
					<li><a href="/components/stickyFooter">StickyFooter</a></li>
				</ol>
			</nav>
			<main>
				<div class="container">
					<slot />
				</div>
			</main>
		</div>
	</div>
	<footer slot="footer" class="py">
		<div class="container">mon footer</div>
	</footer>
</StickyFooter>

<style>
	:global(.debug, .debug *) {
		outline: 1px solid steelblue;
		outline-offset: -1px;
		background-color: var(--debug-bg, rgba(44, 135, 203, 0.2));
	}
	.container {
		max-width: 960px;
		margin-inline: auto;
		width: 100%;
	}

	h1 {
		margin-block: 0;
	}

	.layout {
		display: flex;
		flex-direction: row;
	}
</style>
