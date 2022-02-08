<script type="ts">
  import Prism from 'prismjs';
  import { sprinkles } from './styles/utilities.css';
  import './Code.css';
  export let language = 'html';
  export let entry = '';

  $: codeContent = Prism.highlight(entry, Prism.languages[language]);
</script>

<code
  class={sprinkles({
    display: 'block',
    backgroundColor: 'dark500',
    borderRadius: 'xs',
    paddingX: '2',
    paddingY: '3'
  })}
>
  <pre
    class="language-{language} {sprinkles({
      margin: 'none'
    })}">{@html codeContent}</pre>
</code>

<style>
  pre {
    overflow-x: scroll;
  }
</style>
