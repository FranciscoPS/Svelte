<script>
  export let name = "World";
</script>

<div class="Input">
  <!-- Con el bind conectamos el input con el valor -->
  <input type="text" bind:value={name} />
  <p>Hello {name}!</p>
</div>
