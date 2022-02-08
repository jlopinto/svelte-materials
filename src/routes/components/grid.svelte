<script type="ts">
  import { Grid, Code, GridItem } from 'svelte-materials';
  import Box from '$lib/cosmetic/Box.svelte';

  const demo1 = `
  <Grid>
      <Box>Col 1</Box>
      <Box>Col 2</Box>
      <Box>Col 3</Box>
      <Box>Col 4</Box>
      <Box>Col 5</Box>
      <Box>Col 6</Box>
      <Box>Col 7</Box>
      <Box>Col 8</Box>
      <Box>Col 9</Box>
      <Box>Col 10</Box>
      <Box>Col 11</Box>
      <Box>Col 12</Box>
  </Grid>
  `;
</script>

<h2>3 cols auto, 1 row</h2>
<Grid>
  {#each Array(12).fill('') as item, i}
    <Box>Col {i + 1}</Box>
  {/each}
</Grid>

<Code entry={demo1} />

<h2>4 col, 4 row</h2>
<Grid>
  <GridItem order={{ mobile: 'last', tablet: 'none' }} colspan={{ tablet: 4 }}>
    <Box>Aside</Box></GridItem
  >
  <GridItem colspan={{ tablet: 8 }}>
    <Box>Content</Box>
  </GridItem>
</Grid>

<h2>4 col, 4 row</h2>
<Grid columns="6">
  <GridItem colspan={{ mobile: 1 }}>
    <Box>Aside</Box>
  </GridItem>
  <GridItem colspan={{ mobile: 4 }}><Box>Content</Box></GridItem>
  <GridItem colspan={{ mobile: 1 }}><Box>Aside</Box></GridItem>
</Grid>

<Grid>
  <GridItem colspan={{ tablet: 3 }}><Box>Aside</Box></GridItem>
  <GridItem colspan={{ tablet: 6 }}><Box>Content</Box></GridItem>
  <GridItem colspan={{ tablet: 3 }}><Box>Aside</Box></GridItem>
</Grid>
