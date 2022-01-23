<script>
	import { Demo, ScrollList, ScrollListItem } from 'svelte-materials';
	let carousel;
	let slider;

	let items = [
		{ component: Demo, props: { name: 'one' } },
		{ component: Demo, props: { name: 'Two' } },
		{ component: Demo, props: { name: 'Three' } },
		{ component: Demo, props: { name: 'four' } },
		{ component: Demo, props: { name: 'Five' } },
		{ component: Demo, props: { name: 'Six' } },
		{ component: Demo, props: { name: 'Seven' } },
		{ component: Demo, props: { name: 'Height' } },
		{ component: Demo, props: { name: 'Ten' } },
		{ component: Demo, props: { name: 'Eleven' } },
		{ component: Demo, props: { name: 'Twelve' } }
	];

	const add = () => {
		items = [...items, { component: Demo, props: { name: `New ${items.length + 1}` } }];
		carousel.goto(items.length, true);
	};

	const remove = () => {
		items = [...items.slice(0, items.length - 1)];
		carousel.goto(items.length, true);
	};

	const handleSelection = ({ detail }) => carousel.goto(detail, true);
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h2>scrollList</h2>
	<div class="container">
		<ScrollList {items} bind:carousel on:selection={handleSelection}>
			<svelte:fragment slot="before">
				<button on:click={() => carousel.prev(true)}>prev</button>
				<button on:click={() => carousel.next(true)}>next</button>
			</svelte:fragment>
		</ScrollList>

		<div class="slider">
			<ScrollList
				scrollBehaviour={{
					behavior: 'smooth',
					block: 'start',
					inline: 'center'
				}}
				activeItem={6}
				--carousel-height="20vh"
				{items}
				bind:carousel={slider}
				on:selection={({ detail }) => slider.goto(detail, true)}
				flow="block"
			>
				<svelte:fragment slot="before">
					<button on:click={() => slider.prev()}>prev</button>
					<button on:click={() => slider.next()}>next</button>
				</svelte:fragment>
			</ScrollList>
		</div>
	</div>
	<button on:click={add}>Add</button>
	<button on:click={remove}>remove</button>
</section>

<style>
	.slider {
		margin-top: 4rem;
		height: 20rem;
	}
</style>
