<script>
  import { MediaBlock } from 'svelte-materials';
</script>

<h2>MediaBlock</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid possimus deleniti unde molestias
  fugit, fugiat voluptate placeat numquam laboriosam. Aperiam provident nam distinctio? Odit, beatae
  quas quo minus totam ipsa!
</p>

<h3>Minimal</h3>
<MediaBlock>Mediablock main content</MediaBlock>

<h3>With media before main content</h3>
<MediaBlock>
  <svelte:fragment slot="start">
    <img src="https://picsum.photos/80/80" height="80" width="80" class="mr" alt="" />
  </svelte:fragment>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod quasi reprehenderit sint, eius non
  omnis nisi voluptate nulla esse at adipisci delectus. Obcaecati necessitatibus, accusamus iusto repellendus
  nemo ab.
</MediaBlock>

<h3>With media after main content</h3>
<MediaBlock>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod quasi reprehenderit sint, eius
  non omnis nisi voluptate nulla esse at adipisci delectus. Obcaecati necessitatibus, accusamus
  iusto repellendus nemo ab.
  <svelte:fragment slot="end">
    <img src="https://picsum.photos/80/80" height="80" width="80" class="ml" alt="" />
  </svelte:fragment>
</MediaBlock>

<MediaBlock>
  <svelte:fragment slot="start">
    <img src="https://picsum.photos/80/80" height="80" width="80" class="mr" alt="" />
  </svelte:fragment>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod quasi reprehenderit sint, eius non
  omnis nisi voluptate nulla esse at adipisci delectus. Obcaecati necessitatibus, accusamus iusto repellendus
  nemo ab.
  <svelte:fragment slot="end">
    <img src="https://picsum.photos/80/80" height="80" width="80" class="ml" alt="" />
  </svelte:fragment>
</MediaBlock>

<h2>Alignements</h2>

<h3>Start (default)</h3>
<MediaBlock variant={{ alignItems: 'start' }}>
  <svelte:fragment slot="start">
    <img src="https://picsum.photos/200/200" height="200" width="200" class="mr" alt="" />
  </svelte:fragment>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod quasi reprehenderit sint, eius non
  omnis nisi voluptate nulla esse at adipisci delectus. Obcaecati necessitatibus, accusamus iusto repellendus
  nemo ab.
  <svelte:fragment slot="end">
    <img src="https://picsum.photos/200/200" height="200" width="200" class="ml" alt="" />
  </svelte:fragment>
</MediaBlock>

<h3>center</h3>
<MediaBlock variant={{ alignItems: 'center' }}>
  <svelte:fragment slot="start">
    <img src="https://picsum.photos/200/200" height="200" width="200" class="mr" alt="" />
  </svelte:fragment>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod quasi reprehenderit sint, eius non
  omnis nisi voluptate nulla esse at adipisci delectus. Obcaecati necessitatibus, accusamus iusto repellendus
  nemo ab.
  <svelte:fragment slot="end">
    <img src="https://picsum.photos/200/200" height="200" width="200" class="ml" alt="" />
  </svelte:fragment>
</MediaBlock>

<h3>End</h3>
<MediaBlock variant={{ alignItems: 'end' }}>
  <svelte:fragment slot="start">
    <img src="https://picsum.photos/200/200" height="200" width="200" class="mr" alt="" />
  </svelte:fragment>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod quasi reprehenderit sint, eius non
  omnis nisi voluptate nulla esse at adipisci delectus. Obcaecati necessitatibus, accusamus iusto repellendus
  nemo ab.
  <svelte:fragment slot="end">
    <img src="https://picsum.photos/200/200" height="200" width="200" class="ml" alt="" />
  </svelte:fragment>
</MediaBlock>
