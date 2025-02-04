<script>
  var { pokemonType } = $props();
</script>

<div style:background-color="var(--{pokemonType})" class="pokemon-type">
  <img
    src="/pokemon-types/{pokemonType.toLowerCase()}.svg"
    class="pokemon-type-icon"
    style:background-color="var(--{pokemonType})"
    height={28}
    width={28}
    alt={pokemonType}
  />
  <span class="pokemon-type-name">
    {pokemonType}
  </span>
</div>

<style>
  .pokemon-type {
    display: flex;
    align-items: center;
    padding: 0.25rem;
    gap: 0.25rem;
    border-radius: 9999px;
    width: 110px;
  }

  .pokemon-type-icon {
    border-radius: 9999px;
    padding: 0.25rem;
  }

  .pokemon-type-name {
    text-align: center;
    width: 100%;
    color: white;
    font-size: var(--small);
    font-weight: 600;
  }
</style>
