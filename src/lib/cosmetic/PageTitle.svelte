<div class="pageTitle">
  <h2><slot /></h2>
  <div class="line" />
</div>

<style>
  h2 {
    font-size: var(--font-size-7);
    padding-left: var(--size-3);
    padding-block: var(--size-3);
  }

  .pageTitle {
    padding-bottom: var(--size-7);
  }

  .line {
    height: 3px;
    position: relative;
    display: block;
    width: 100%;
    background-color: var(--primary-deep);
    transform: skew(-20deg);
    border-radius: var(--radius-4);
  }
</style>
