<script context="module">
  export async function load({ url }) {
    return {
      props: {
        pathname: url.pathname
      }
    };
  }
</script>

<script lang="ts">
  import '$lib/styles/index.css';
  import { themeClass } from '$lib/styles/theme-default.css';

  import { MediaBlock, Spread, Link, ScrollList } from 'svelte-materials';
  import '../app.css';

  export let pathname;

  const navContent = [
    { url: '/', label: 'home' },
    { url: '/components/scrollList', label: 'ScrollList' },
    { url: '/components/mediaBlock', label: 'MediaBlock' },
    { url: '/components/spread', label: 'Spread' },
    { url: '/components/link', label: 'Link' },
    { url: '/components/collapse', label: 'Collapse' }
  ];
</script>

<Spread>
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
      <nav class="mainnav">
        <ScrollList flow="block" --scrollbar-width="none">
          {#each navContent as item, i}
            <li>
              <Link class="mainnav-item {item.url === pathname ? 'active' : ''}" href={item.url}
                >{item.label}</Link
              >
            </li>
          {/each}
        </ScrollList>
      </nav>
      <main>
        <slot />
      </main>
    </div>
  </div>
  <footer slot="footer" class="py">
    <div class="container">mon footer</div>
  </footer>
</Spread>

<style>
  :global(.debug, .debug *) {
    outline: 1px solid steelblue;
    outline-offset: -1px;
    background-color: var(--debug-bg, rgba(44, 135, 203, 0.2));
  }
  .container {
    max-width: 100%;
    width: 960px;
    margin-inline: auto;
  }

  h1 {
    margin-block: 0;
  }

  .layout {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    gap: 1 rem;
  }

  main {
    grid-column: span 7 / span 7;
  }

  .mainnav {
    grid-column: span 2 / span 2;
  }

  .mainnav :global(.mainnav-item) {
    padding: 0.5rem 1rem;
    display: block;
    border-left: 2px solid var(--inactive);
  }

  .mainnav :global(.mainnav-item:hover) {
    border-color: var(--active);
  }

  .mainnav :global(li:not(:first-child) .mainnav-item) {
    margin-top: 0.2rem;
  }

  .mainnav :global(.active) {
    border-color: var(--active);
    color: var(--active);
  }
</style>
