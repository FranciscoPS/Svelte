<script>
  import Button from "./Button.svelte";

  const gitHubUrl = "https://github.com/FranciscoPS";
  const styles = {
    darkMode: false,
  };

  let count = 0;

  function handleClick() {
    count += 1;
  }

  function toggle() {
    styles.darkMode = !styles.darkMode;

    //Agregamos la clase dark-mode al body
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<div class={!styles.darkMode ? "text-darkMode" : "text-lightMode text-UpSize"}>
  <p>
    A <a href={gitHubUrl} target="_blank">Francisco Peralta</a> project.
  </p>

  {#if styles.darkMode}
    <span>Dark Mode Enabled!</span>
    <!-- Podemos agregar un else -->
    <!-- {:else} -->
  {/if}

  <Button text="Click Me" {count} on:click={handleClick} />

  <Button text={styles.darkMode ? "🌞" : "🌚"} on:click={toggle} />
</div>

<style>
  p {
    font-size: 22px;
  }

  span {
    display: block;

    margin: 10px 0;
  }

  .text-darkMode {
    color: var(--color-lightMode);
  }
  .text-lightMode {
    color: var(--color-darkMode);
  }
</style>
