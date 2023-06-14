<script>
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
    <!-- {:else} -->
  {/if}

  <button on:click={handleClick}>Click {count === 0 ? "" : count}</button>

  <button on:click={toggle}> {styles.darkMode ? "🌞" : "🌚"}</button>
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
