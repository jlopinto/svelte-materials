<script>
  import { readableColor } from 'polished';
  import { generatePalette } from 'svelte-materials';

  // const palette = generatePalette();
</script>

<div class="flex">
  {#each palette as { shades }}
    {#each shades as { name, color }}
      <div class="square" style="background-color: {color}; color: {readableColor(color)}">
        {name}: {color}
      </div>
    {/each}
  {/each}
</div>

<style>
  .flex {
    display: flex;
  }

  .square {
    padding: 10px;
  }
</style>
