<script type="ts">
  import Prism from 'prismjs';
  export let language = 'html';
  export let entry = '';

  $: codeContent = Prism.highlight(entry, Prism.languages[language]);
</script>

<code>
  <pre class="language-{language}">{@html codeContent}</pre>
</code>

<style>
  code {
    display: block;
    background-color: var(--bgColor, #1d1f21);
    border-radius: var(--borderRadius, 0.25rem);
    padding: var(--paddingY, 1em) var(--paddingX, 1em);
  }

  pre {
    overflow-x: scroll;
    margin: 0;
  }

  .token.tag,
  .token.punctuation {
    color: var(--color, #f8f8f2);
  }

  .token.attr-value {
    color: #dd4b11;
  }

  .token.attr-name {
    color: #dd4b11;
  }
</style>
