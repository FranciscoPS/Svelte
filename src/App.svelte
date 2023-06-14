<script>
  //Los export van a servir para obtener los valores de props, en este caso el name y lastName del main.js
  export let name;
  export let lastName;
  //Variables que no requieren ser obtenidas de props y se mantienen en local del archivo
  const svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";
  const gitHubUrl = "https://github.com/FranciscoPS";
</script>

<main>
  <h1>Hello {name} {lastName} !</h1>
  <p>
    A <a href={gitHubUrl} target="_blank">Francisco Peralta's</a> project.
  </p>

  <img src={svelteLogo} alt="Svelte Logo" />
</main>

<style>
  /* Global Styles */
  :global(body) {
    color: #0084f6;
    background-color: #f2eee2;
  }

  :global(:root) {
    --theme-color: purple;
  }

  p {
    color: var(--theme-color);

    font-size: 22px;
  }
  /* End of Global Styles */
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  main img {
    width: 30%;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
