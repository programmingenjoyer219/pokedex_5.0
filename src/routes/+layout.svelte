<script>
  import "$styles/reset.css";
  import "$styles/normalize.css";
  import "$styles/app.css";
  import ThemeSwitch from "$components/ThemeSwitch.svelte";

  var { children } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap"
    rel="stylesheet"
  />

  <title>Pokédex 5.0</title>
</svelte:head>

<div class="wrapper">
  <header class="header">
    <a class="logo" href="/">
      <img
        src="/pokemon-logo.png"
        alt="Pokedex version 5.0"
        height="63"
        width="150"
      />
    </a>
    <ThemeSwitch />
  </header>
  {@render children()}
</div>

<style>
  .wrapper {
    max-width: 56rem;
    margin-inline: auto;

    padding-inline: 0.5rem;
  }

  .logo {
    max-width: 12rem;
    margin-inline: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    left: 1rem;
  }

  .header {
    display: flex;
    align-items: center;
  }

  .theme-toggle-button {
    justify-self: flex-end;
  }

  @media (min-width: 600px) {
    .logo img {
      width: 200px;
      height: 84px;
    }
  }
</style>
