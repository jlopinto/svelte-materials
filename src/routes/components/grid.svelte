<script type="ts">
  import Grid from '$lib/Grid.svelte';
  import GridItem from '$lib/GridItem.svelte';
</script>

<h2>12 col, 1 row</h2>
<Grid>
  <div>col 1</div>
  <div>col 2</div>
</Grid>

<h2>4 col, 4 row</h2>
<Grid>
  <GridItem order={{ mobile: 'last', tablet: 'none' }} colspan={{ tablet: 4 }}>Aside</GridItem>
  <GridItem colspan={{ tablet: 8 }}>Content</GridItem>
</Grid>

<h2>4 col, 4 row</h2>
<Grid columns="6">
  <GridItem colspan={{ mobile: 1 }}>Aside</GridItem>
  <GridItem colspan={{ mobile: 3 }}>Content</GridItem>
  <GridItem colspan={{ mobile: 1 }}>Aside</GridItem>
</Grid>
<Grid columns="12">
  <GridItem colspan={{ mobile: 3 }}>Aside</GridItem>
  <GridItem colspan={{ mobile: 6 }}>Content</GridItem>
  <GridItem colspan={{ mobile: 3 }}>Aside</GridItem>
</Grid>
