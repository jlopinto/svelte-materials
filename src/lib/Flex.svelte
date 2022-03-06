<script lang="ts">
  const { class: classNames, ...restProps } = $$restProps;
</script>

<div class={classNames} {...restProps}><slot /></div>

<style lang="postcss">
  div {
    --_Flex-alignContent: auto;
    --_Flex-justifyContent: auto;

    --_Flex-alignItems: auto;
    --_Flex-justifyItems: auto;

    display: flex;
    place-content: var(--Flex-alignContent, var(--_Flex-alignContent))
      var(--_Flex-justifyContent, var(--_Flex-justifyContent));
    place-items: var(--Flex-alignItems, var(--_Flex-alignItems))
      var(--_Flex-justifyItems, var(--_Flex-justifyItems));
  }
</style>
