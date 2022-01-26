<script type="ts">
  import { Button, Collapse } from 'svelte-materials';

  let collapse1;
  let collapse1IsOpen = false;
  let collapse1Collapsing = false;
  let collapse2;
  let collapse2IsOpen = true;
  let collapse2Collapsing = false;
</script>

<Button disabled={collapse1IsOpen} on:click={() => collapse1.open()} label="Open" />
<Button disabled={!collapse1IsOpen} on:click={() => collapse1.close()} label="Close" />
<Button
  on:click={() => (collapse1IsOpen ? collapse1.close() : collapse1.open())}
  busy={collapse1Collapsing}
  disabled={collapse1Collapsing}
  label="Toggle"
/>

<Collapse
  bind:controls={collapse1}
  bind:isOpen={collapse1IsOpen}
  bind:collapsing={collapse1Collapsing}
>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget ex euismod, euismod nunc eu,
    consectetur nunc. Sed euismod, urna eu tincidunt tincidunt, nisi nisl tincidunt nunc, euismod
    aliquet nunc nisl euismod nunc.
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iste consequuntur sint tempore
    praesentium. Porro obcaecati debitis, quo, nostrum soluta atque quis dolores est quisquam
    accusamus, corporis id quas commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Neque iste consequuntur sint tempore praesentium. Porro obcaecati debitis, quo, nostrum soluta
    atque quis dolores est quisquam accusamus, corporis id quas commodi.
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iste consequuntur sint tempore
    praesentium. Porro obcaecati debitis, quo, nostrum soluta atque quis dolores est quisquam
    accusamus, corporis id quas commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Neque iste consequuntur sint tempore praesentium. Porro obcaecati debitis, quo, nostrum soluta
    atque quis dolores est quisquam accusamus, corporis id quas commodi.
  </div>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iste consequuntur sint tempore
    praesentium. Porro obcaecati debitis, quo, nostrum soluta atque quis dolores est quisquam
    accusamus, corporis id quas commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Neque iste consequuntur sint tempore praesentium. Porro obcaecati debitis, quo, nostrum soluta
    atque quis dolores est quisquam accusamus, corporis id quas commodi.
  </div>
</Collapse>

<Button disabled={collapse2IsOpen} on:click={() => collapse2.open()} label="Open" />
<Button disabled={!collapse2IsOpen} on:click={() => collapse2.close()} label="Close" />
<Button
  on:click={() => (collapse2IsOpen ? collapse2.close() : collapse2.open())}
  label="Toggle"
  busy={collapse2Collapsing}
  disabled={collapse2Collapsing}
/>

<Collapse
  bind:controls={collapse2}
  bind:isOpen={collapse2IsOpen}
  bind:collapsing={collapse2Collapsing}
>
  <div>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iste consequuntur sint tempore
    praesentium. Porro obcaecati debitis, quo, nostrum soluta atque quis dolores est quisquam
    accusamus, corporis id quas commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Neque iste consequuntur sint tempore praesentium. Porro obcaecati debitis, quo, nostrum soluta
    atque quis dolores est quisquam accusamus, corporis id quas commodi.
  </div>
</Collapse>
