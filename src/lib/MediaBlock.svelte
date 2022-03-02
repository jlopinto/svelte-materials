<script type="ts">
  const { class: userClass = '', ...restProps } = $$restProps;
</script>

<div class="media {userClass}" {...restProps}>
  <slot name="start" />
  <div class="media-body"><slot /></div>
  <slot name="end" />
</div>

<style lang="postcss">
  .media {
    display: flex;
    align-items: var(--mediaBlockAlignItems, 'flex-start');
  }

  .media-block {
    flex-grow: 1;
  }
</style>
