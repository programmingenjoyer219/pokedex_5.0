<script>
  import { MediaQuery } from "svelte/reactivity";
  import PokemonProfileSlot from "./PokemonProfileSlot.svelte";
  import PokemonTypeSlot from "./PokemonTypeSlot.svelte";

  var { pokemon } = $props();
  var {
    id,
    name: { english: english_name },
    type: pokemon_types,
    profile: { height, weight },
    description,
  } = pokemon;
</script>

<a
  href="/pokemon/{id}"
  class="pokemon-card"
  style:border="2px solid var(--{pokemon_types[0]})"
>
  <img
    loading="lazy"
    src="/images/{id}.png"
    alt="{english_name}. {description}"
    height="80"
    width="80"
    class="pokemon-image"
  />
  <p
    class="pokemon-card-name text-shadow"
    style:background-color="var(--{pokemon_types[0]})"
  >
    {english_name}
  </p>
  <ul
    class="pokemon-type-wrapper"
    aria-label="{english_name} belongs to the type:"
  >
    {#each pokemon_types as pokemon_type, index (index)}
      <li>
        <PokemonTypeSlot pokemonType={pokemon_type} />
      </li>
    {/each}
  </ul>
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

  .pokemon-card-name {
    padding: 0.25rem;
    border-radius: var(--border-rounded);
    font-weight: 600;
    color: white;
    font-size: var(--small);
  }

  .pokemon-type-wrapper {
    display: none;
  }

  @media (min-width: 600px) {
    .pokemon-card-name {
      font-weight: 600;
      font-size: var(--h5);
    }

    .pokemon-type-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .pokemon-image {
      height: 160px;
      width: 160px;
    }
  }
</style>
