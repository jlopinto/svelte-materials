<script>
  export let active = false;
</script>

<div on:click {...$$restProps} />

<!-- {sprinkles({
  width: '8',
  height: '8',
  backgroundColor: active ? 'blue200' : 'active200',
  borderRadius: 'full',
  boxShadow: 'xl'
})} -->
<style>
  div {
    color: aliceblue;
  }
</style>
