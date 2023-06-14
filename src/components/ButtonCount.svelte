<script>
  import { count } from "../store/store";

  function handleClick() {
    //Con el update vamos a ejecutar un callback y podremos actualizar el valor
    count.update((count) => {
      console.log(`La cuenta actual se encuentra en ${count}`);

      return count + 1;
    });
  }
</script>

<!-- Al utilizar el $count para la variable obtenida del estado, obtenemos directamente el valor sin necesidad de suscribirnos o algo -->
<button on:click={handleClick}>Count from Store: {$count}</button>

<style>
  button {
    padding: 0.5rem;

    color: white;
    background-color: #f76027;

    border: none;
    border-radius: 4px;

    text-transform: uppercase;
    cursor: pointer;
  }
</style>
