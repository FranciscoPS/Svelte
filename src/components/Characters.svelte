<script>
  //onMount nos permite llamar una función que se ejecuta después de montar el elemento, es un tipo de equivalente al ngOnInit
  import { onMount } from "svelte";

  let characters = [];
  const cycleImg = "/Images/Cycle.jpg";

  onMount(async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();

    characters = data.results;
  });
</script>

<div>
  <div class="Characters">
    {#each characters as character}
      <figure>
        <img src={character.image} alt={character.name} />

        <figcaption>{character.name}</figcaption>
      </figure>
      <!-- Podemos agregar un else -->
    {:else}
      <p>Loading...</p>
    {/each}
  </div>

  <div>
    <h3>Svelte Life Cycle</h3>

    <figure>
      <img src={cycleImg} alt="Svelte Life Cycle" />
    </figure>
  </div>
</div>

<style>
  .Characters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
</style>
