<script lang="ts">
  import { Link, List, ScrollList } from '$lib';

  export let content = [];
  export let currentPath = '';

  $: content = content.map((section) => {
    return { ...section, active: !!section.pages.find((page) => page.url === currentPath) };
  });
</script>

<nav>
  <ScrollList flow="block" --gap="var(--size-4)" --scrollbar-width="none" unstyled>
    {#each content as { label, pages, active }}
      <li class="navItem">
        <div class="label {active ? 'active' : ''}">
          {label}
        </div>
        <List class="subnav" flow="block" --gap="var(--size-1)" unstyled>
          {#each pages as { url, label }}
            <li>
              <Link class="link {url === currentPath ? 'active' : ''}" href={url}>
                {label}
              </Link>
            </li>
          {/each}
        </List>
      </li>
    {/each}
  </ScrollList>
</nav>

<style>
  .label {
    font-size: var(--font-size-4);
    padding: var(--size-2) 0;
  }

  .navItem {
  }

  :global(.link) {
    padding: var(--size-2) var(--size-2);
    display: block;
    border-left: 2px solid var(--primary);
  }

  :global(.link:hover, .active) {
    border-color: var(--primary-deep);
    color: var(--primary-deep);
  }
</style>
