<script>
  let skills = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "Javascript",
    },
  ];
</script>

<div class="Skills">
  <h3>Skills</h3>
  <ul>
    <!-- #each OBJETO_A_ITERAR  as { PROPIEDAD(ES)_A_DESUSTRUCTURAR }, INDICE-->
    {#each skills as { name, id }, i}
      <li>{id}: {name}</li>
    {/each}
  </ul>
</div>

<style>
  .Skills {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ul {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  li {
    display: inline;

    margin: 0 0 0 0.4em;
  }
</style>
