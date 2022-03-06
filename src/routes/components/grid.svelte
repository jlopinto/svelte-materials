<script type="ts">
  import { Grid, Code, GridItem } from 'svelte-materials';
  import Box from '$lib/cosmetic/Box.svelte';

  const demo1 = `<Grid --Grid-cols="6">
  {#each Array(6).fill('') as item, i}
    <Box>Col {i + 1}</Box>
  {/each}
</Grid>`;
</script>

<Grid --Grid-gap="1rem">
  <h2>6 cols auto, 1 row</h2>
  <Code entry={demo1} />
  <Grid --Grid-cols="6">
    {#each Array(6).fill('') as item, i}
      <Box>Col {i + 1}</Box>
    {/each}
  </Grid>
</Grid>

<Grid>
  <h2>GridItem</h2>
  <Code
    entry={`<Grid --Grid-cols="3" --Grid-rows="3">
  <GridItem --GridItem-rowspan="3"><Box>01</Box></GridItem>
  <GridItem --GridItem-colspan="2"><Box>02</Box></GridItem>
  <GridItem --GridItem-colspan="2" --GridItem-rowspan="2"><Box>03</Box></GridItem>
</Grid>`}
  />
  <Grid --Grid-cols="3" --Grid-rows="3">
    <GridItem --GridItem-rowspan="3"><Box>01</Box></GridItem>
    <GridItem --GridItem-colspan="2"><Box>02</Box></GridItem>
    <GridItem --GridItem-colspan="2" --GridItem-rowspan="2"><Box>03</Box></GridItem>
  </Grid>
</Grid>
