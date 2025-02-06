<script>
  import "$styles/reset.css";
  import "$styles/normalize.css";
  import "$styles/app.css";
  import ThemeSwitch from "$components/ThemeSwitch.svelte";

  var { children } = $props();
</script>

<svelte:head>
  <link
    crossorigin
    rel="preload"
    as="font"
    href="/fonts/SpaceMono-Regular.woff"
  />
  <link
    crossorigin
    rel="preload"
    as="font"
    href="/fonts/SpaceMono-Italic.woff"
  />
  <link crossorigin rel="preload" as="font" href="/fonts/SpaceMono-Bold.woff" />
  <link
    crossorigin
    rel="preload"
    as="font"
    href="/fonts/SpaceMono-BoldItalic.woff"
  />

  <title>Pokédex 5.0</title>
</svelte:head>

<div class="wrapper">
  <header class="header">
    <a class="logo" href="/">
      <img
        src="/pokemon-logo.webp"
        alt="Pokedex version 5.0"
        height="63"
        width="150"
        fetchpriority="high"
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
