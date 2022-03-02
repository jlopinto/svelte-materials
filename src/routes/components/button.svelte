<script type="ts">
  import { Button, Code } from 'svelte-materials';
  const demo = `
<Collapse
    bind:controls={collapse2}
    bind:isOpen={collapse2IsOpen}
    bind:collapsing={collapse2Collapsing}
>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iste consequuntur sint tempore
    praesentium. Porro obcaecati debitis, quo, nostrum soluta atque quis dolores est quisquam
    accusamus, corporis id quas commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Neque iste consequuntur sint tempore praesentium. Porro obcaecati debitis, quo, nostrum soluta
    atque quis dolores est quisquam accusamus, corporis id quas commodi.
</Collapse>
  `;
</script>

<h2>Button</h2>

<Code entry={`<Button label="Un bouton" />`} />
<Button />

<h3>Complex HTML</h3>
<Code entry={demo} />
<Button label="Un bouton" />
<Button label="Un bouton disabled" disabled />
<Button busy>Un bouton busy</Button>
<Button label="Un bouton busy disabled" busy disabled />
