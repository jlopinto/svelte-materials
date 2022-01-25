<script type="ts">
	import { Button, Collapse } from 'svelte-materials';

	let collapse1;
	let collapse2;
	let isOpen = true;
</script>

<Collapse bind:controls={collapse1}>
	<div>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iste consequuntur sint tempore
		praesentium. Porro obcaecati debitis, quo, nostrum soluta atque quis dolores est quisquam
		accusamus, corporis id quas commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
		Neque iste consequuntur sint tempore praesentium. Porro obcaecati debitis, quo, nostrum soluta
		atque quis dolores est quisquam accusamus, corporis id quas commodi.
	</div>
</Collapse>
<Button on:click={() => collapse1.open()} label="Open" />
<Button on:click={() => collapse1.close()} label="Close" />
<Button on:click={() => collapse1.toggle()} label="Toggle" />

<Collapse bind:controls={collapse2} bind:isOpen>
	<div>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque iste consequuntur sint tempore
		praesentium. Porro obcaecati debitis, quo, nostrum soluta atque quis dolores est quisquam
		accusamus, corporis id quas commodi. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
		Neque iste consequuntur sint tempore praesentium. Porro obcaecati debitis, quo, nostrum soluta
		atque quis dolores est quisquam accusamus, corporis id quas commodi.
	</div>
</Collapse>
<Button on:click={() => collapse2.open()} label="Open" />
<Button on:click={() => collapse2.close()} label="Close" />
<Button on:click={() => collapse2.toggle()} label="Toggle {isOpen}" />
