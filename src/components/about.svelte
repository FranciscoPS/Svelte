<script>
  const gitHubUrl = "https://github.com/FranciscoPS";

  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<section>
  <p>
    A <a href={gitHubUrl} target="_blank">Francisco Peralta</a> project.
  </p>

  <button on:click={handleClick}>Click {count === 0 ? "" : count}</button>
</section>

<style>
  p {
    color: var(--theme-color);

    font-size: 22px;
  }
</style>
