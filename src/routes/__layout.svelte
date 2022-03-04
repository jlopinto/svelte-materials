<script lang="ts">
  import { page } from '$app/stores';
  import MainNav from '$lib/cosmetic/MainNav.svelte';
  import { Spread } from 'svelte-materials';
  import '../app.css';

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
      <h1>svelte-materials</h1>
      <div>Reduction de composants, à la sauce svelte</div>
    </div>
  </header>
  <div class="container">
    <div class="layout">
      <div class="sidebar">
        <MainNav content={navContent} currentPath={$page.url.pathname} />
      </div>
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
  header {
    padding-block: var(--size-5);
  }
  
  .container {
    max-width: 100%;
    width: var(--size-md);
    margin-inline: auto;
  }

  h1 {
    margin-block: 0;
  }

  .layout {
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 1fr));
    gap: var(--size-4)
  }

  main {
    grid-column: span 7 / span 7;
  }

  .sidebar {
    grid-column: span 2 / span 2;
  }
</style>
