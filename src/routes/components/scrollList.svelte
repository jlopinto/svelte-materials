<script>
	import { tick } from 'svelte';
	import { ScrollList } from 'svelte-materials';
	import Demo from '$lib/cosmetic/Demo.svelte';

	let carousel;
	let carouselActiveItem = 5;
	let slider;
	let sliderActiveItem = 1;
	let items = Array.apply(null, { length: 10 }).map((_, i) => {
		return { name: `item ${++i}` };
	});

	$: itemLn = items.length;
	$: lastItem = itemLn - 1;

	const add = async () => {
		items = [...items, { name: `New ${itemLn + 1}` }];
		await tick();
		carousel.goto(lastItem);
		slider.goto(lastItem);
	};

	const remove = async () => {
		items = [...items.slice(0, lastItem)];
		await tick();
		carousel.goto(lastItem);
		slider.goto(lastItem);
	};
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h2>scrollList</h2>
	<div class="container">
		<ScrollList bind:list={carousel} bind:activeItem={carouselActiveItem}>
			{#each items as { name }, i}
				<li>
					<Demo active={carouselActiveItem === i} {name} on:click={() => carousel.goto(i)} />
				</li>
			{/each}
			<svelte:fragment slot="before">
				<button on:click={() => carousel.goto(carouselActiveItem - 1)}>prev</button>
				<button on:click={() => carousel.goto(carouselActiveItem + 1)}>next</button>
			</svelte:fragment>
		</ScrollList>

		<div class="slider">
			<ScrollList
				--track-height="20vh"
				--scrollbar-width="none"
				--gap="1rem 0"
				bind:list={slider}
				bind:activeItem={sliderActiveItem}
				flow="block"
				scrollBehaviour={{
					block: 'start'
				}}
			>
				{#each items as { name }, i}
					<Demo active={sliderActiveItem === i} {name} on:click={() => slider.goto(i)} />
				{/each}
				<svelte:fragment slot="before">
					<button on:click={() => slider.goto(sliderActiveItem - 1)}>prev</button>
					<button on:click={() => slider.goto(sliderActiveItem + 1)}>next</button>
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
		display: inline-block;
	}
</style>
