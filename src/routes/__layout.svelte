<script lang="ts">
  import { page } from '$app/stores';
  import '../app.css';
  import List from '$lib/List.svelte';
  import { Link, MediaBlock, ScrollList, Spread } from 'svelte-materials';

  const navContent = [
    { label: 'home', pages: [{ url: '/', label: 'home' }] },
    { label: 'about', pages: [{ url: '/components/vars', label: 'Variables' }] },
    {
      label: 'layout',
      pages: [
        {
          url: '/components/grid',
          label: 'Grid'
        },
        { url: '/components/gridItem', label: 'GridItem' },
        { url: '/components/mediaBlock', label: 'MediaBlock' },
        { url: '/components/spread', label: 'Spread' }
      ]
    },
    {
      label: 'components',
      pages: [
        { url: '/components/list', label: 'List' },
        { url: '/components/scrollList', label: 'ScrollList' },
        { url: '/components/link', label: 'Link' },
        { url: '/components/collapse', label: 'Collapse' },
        { url: '/components/button', label: 'Button' }
      ]
    }
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
        <ScrollList flow="block" --scrollbar-width="none" unstyled>
          {#each navContent as { label, pages }}
            <li>
              <div>
                {label}
              </div>
              <List flow="block" class="mainnav" unstyled>
                {#each pages as { url, label }}
                  <li>
                    <Link class="mainnav__item {url === page.pathname ? 'active' : ''}" href={url}>
                      {label}
                    </Link>
                  </li>
                {/each}
              </List>
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

  .mainnav :global(.mainnav__item) {
    padding: 0.5rem 1rem;
    display: block;
    border-left: 2px solid var(--inactive);
  }

  .mainnav :global(.mainnav__item:hover) {
    border-color: var(--active);
  }

  .mainnav :global(li:not(:first-child) .mainnav__item) {
    margin-top: 0.2rem;
  }

  .mainnav :global(.active) {
    border-color: var(--active);
    color: var(--active);
  }

  .mainnav :global(.mainnav__group) {
    margin-top: 1rem;
  }

  .mainnav :global(.mainnav__group-label) {
    padding: 1rem 0;
  }
</style>
