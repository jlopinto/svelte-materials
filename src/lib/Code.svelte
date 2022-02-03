<script type="ts">
  import { borderRadius } from 'polished';
  import Prism from 'prismjs';
  import { onMount } from 'svelte';
  import { sprinkles } from './styles/utilities.css';
  import { vars } from './styles/vars.css';
  export let language = 'html';
  export let entry = '';
  let code;
  let codeContent = '';
  onMount(() => {
    codeContent = Prism.highlight(entry, Prism.languages[language]);
  });
</script>

<pre style="display: none;" bind:this={code}>
  <slot />
</pre>

<code
  class={sprinkles({
    display: 'block',
    backgroundColor: 'dark500',
    borderRadius: 'xs',
    paddingX: '2x',
    paddingY: '3x'
  })}
>
  <pre
    class="language-{language} {sprinkles({
      margin: 'none'
    })}">{@html codeContent}</pre>
</code>
