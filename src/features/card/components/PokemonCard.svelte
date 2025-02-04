<script>
  import PokemonProfileSlot from "./PokemonProfileSlot.svelte";
  import PokemonTypeSlot from "./PokemonTypeSlot.svelte";

  var { pokemon } = $props();
  var {
    id,
    name: { english: english_name },
    type: pokemon_types,
    profile: { height, weight },
  } = pokemon;
</script>

<!-- card design for screen-width <= 600px -->
<a
  href="/pokemon/{id}"
  class="pokemon-card pokemon-card-small"
  style:border="2px solid var(--{pokemon_types[0]})"
>
  <img src="/images/{id}.png" alt={english_name} class="rounded-md size-20" />
  <span
    class="pokemon-card-name"
    style:background-color="var(--{pokemon_types[0]})">{english_name}</span
  >
</a>

<!-- card design for screen-width >= 600px -->
<a
  href="/pokemon/{id}"
  style:border="2px solid var(--{pokemon_types[0]})"
  class="pokemon-card pokemon-card-big"
>
  <img
    src="/images/{id}.png"
    alt={english_name}
    class="rounded-md"
    height="160"
    width="160"
  />
  <span class="pokemon-card-name">{english_name}</span>
  <div class="pokemon-type-wrapper">
    {#each pokemon_types as pokemon_type, index (index)}
      <PokemonTypeSlot pokemonType={pokemon_type} />
    {/each}
  </div>
  <PokemonProfileSlot {height} {weight} />
</a>

<style>
  .pokemon-card {
    cursor: pointer;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    padding: 1rem;

    border-radius: var(--border-rounded);

    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
    transition:
      transform 150ms,
      box-shadow 150ms;

    &:hover {
      transform: translateY(-0.25rem);
      box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.15);
    }
  }

  .pokemon-card-big {
    display: none;
  }

  .pokemon-card-small .pokemon-card-name {
    padding: 0.25rem;
    border-radius: var(--border-rounded);
    font-weight: 600;
    color: white;
    font-size: var(--small);
  }

  .pokemon-card-big .pokemon-card-name {
    font-weight: 600;
    font-size: var(--h5);
    color: black;
  }

  .pokemon-type-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  @media (min-width: 600px) {
    .pokemon-card-small {
      display: none;
    }

    .pokemon-card-big {
      display: flex;
    }
  }
</style>
