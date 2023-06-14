<script>
  export let count = 0;
  export let text;
</script>

<!-- Al agregar el on:click, actualizará los valores ya que ejecutará el onclick del componente que se encuentra en About -->
<button on:click>{text} {count === 0 ? "" : count}</button>
