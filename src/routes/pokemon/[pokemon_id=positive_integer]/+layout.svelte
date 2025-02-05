<script>
  var { children, data } = $props();
  var {
    pokemon: {
      name: { english: english_name },
    },
  } = data;
</script>

<main class="section">
  <h1>{english_name}</h1>
  <div class="layout-wrapper">
    {@render children()}
  </div>
</main>

<style>
  h1 {
    text-align: center;
    font-weight: 600;
    color: var(--primary-color);
  }

  @media (min-width: 600px) {
    .layout-wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
