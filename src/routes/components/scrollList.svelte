<script>
  import { tick } from 'svelte';
  import { ScrollList } from 'svelte-materials';
  import Demo from '$lib/cosmetic/Demo.svelte';
  import Button from '$lib/Button.svelte';
  import Circle from '$lib/cosmetic/Circle.svelte';

  let carousel;
  let carouselActiveItem = 5;
  let slider;
  let sliderActiveItem = 1;
  let scrollStack;
  let scrollStackActiveItem = 10;
  let items = Array.apply(null, { length: 5 }).map((_, i) => {
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
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro id voluptatem ipsam voluptatum
    nisi eaque hic quidem beatae sapiente voluptates itaque vero illum quia, architecto eius. Ipsum
    rem vero corrupti!
  </p>

  <div>
    <Button on:click={add} label="Add item" />
    <Button on:click={remove} label="Remove item" />
  </div>

  <h3>Basic ScrollList</h3>
  <ScrollList>
    {#each items as { name }}
      <li>
        <Demo {name} />
      </li>
    {/each}
  </ScrollList>

  <h3>Basic ScrollList without scrollbar</h3>
  <p>maj + scroll over to scroll it vertically</p>
  <ScrollList --scrollbar-width="none">
    {#each items as { name }}
      <li>
        <Demo {name} />
      </li>
    {/each}
  </ScrollList>

  <h3>ScrollList with controls</h3>

  <div class="carousel">
    <Button
      on:click={() => carousel.goto(carouselActiveItem - 1)}
      label="prev"
      class="control control--prev"
    />
    <ScrollList bind:list={carousel} bind:activeItem={carouselActiveItem} --gap="2rem">
      {#each items as { name }, i}
        <li>
          <Demo active={carouselActiveItem === i} {name} on:click={() => carousel.goto(i)} />
        </li>
      {/each}
    </ScrollList>
    <Button
      on:click={() => carousel.goto(carouselActiveItem + 1)}
      label="next"
      class="control control--next"
    />
  </div>
  <h3>Vertical ScrollList with controls</h3>
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
        <li>
          <Demo active={sliderActiveItem === i} {name} on:click={() => slider.goto(i)} />
        </li>
      {/each}
    </ScrollList>
    <Button on:click={() => slider.goto(sliderActiveItem - 1)} label="prev" />
    <Button on:click={() => slider.goto(sliderActiveItem + 1)} label="next" />
  </div>

  <h3>scrollList effect</h3>
  <div class="scrollStack">
    <ScrollList bind:list={scrollStack} bind:activeItem={scrollStackActiveItem}>
      {#each items as { name }, i}
        <li class="scrollStack-item" class:scrollStack-item--active={scrollStackActiveItem === i}>
          <Circle
            on:click={() => scrollStack.goto(i)}
            {name}
            active={scrollStackActiveItem === i}
            on:click={() => scrollStack.goto(i)}
          />
        </li>
      {/each}
    </ScrollList>
    <Button on:click={() => slider.goto(scrollStackActiveItem - 1)} label="prev" />
    <Button on:click={() => slider.goto(scrollStackActiveItem + 1)} label="next" />
  </div>
</section>

<style>
  .carousel {
    display: flex;
  }

  .slider {
    height: 20rem;
    display: inline-block;
  }

  :global(.control--next) {
    margin-left: 1rem;
  }

  :global(.control--prev) {
    margin-right: 1rem;
  }

  .scrollStack :global(.track) {
    padding-top: 1rem;
  }

  .scrollStack-item:not(:first-child) {
    margin-left: -1rem;
    transition: transform 0.2s ease, margin 0.2s ease;
  }

  .scrollStack-item--active {
    transform: translate3d(0, -1rem, 0);
  }

  .scrollStack-item:hover ~ .scrollStack-item,
  .scrollStack-item--active ~ .scrollStack-item {
    transform: translate3d(1rem, 0, 0);
  }

  .scrollStack-item:hover {
    transform: translate3d(0, -1rem, 0);
  }
</style>
