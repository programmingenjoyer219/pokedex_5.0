<script>
  import { POKEMON_TYPES } from "$lib/pokemonTypes";

  var { updatePokemonType } = $props();
</script>

<p class="sr-only">Search pokémon by type</p>
<ul class="pokemon-type-buttons-wrapper">
  {#each POKEMON_TYPES as pokemon_type}
    <li>
      <button
        class="pokemon-type-button"
        style:background-color="var(--{pokemon_type})"
        title={pokemon_type}
        onclick={function handleClick() {
          updatePokemonType(pokemon_type);
        }}
      >
        <img
          src="/pokemon-types/{pokemon_type.toLowerCase()}.svg"
          alt={pokemon_type}
          height="28"
          width="28"
        />
      </button>
    </li>
  {/each}
</ul>

<style>
  .pokemon-type-buttons-wrapper {
    padding: 0.75rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    border: 2px solid var(--primary-color);
    border-radius: var(--border-rounded);

    overflow-x: scroll;
  }

  .pokemon-type-button {
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.15rem;
    height: 3rem;
    width: 3rem;

    transition: transform 150ms;

    &:hover {
      transform: scale(110%);
    }
  }

  @media (min-width: 600px) {
    .pokemon-type-buttons-wrapper {
      padding: 1rem;
    }

    .pokemon-type-button {
      padding: 0.5rem;
      height: 3.5rem;
      width: 3.5rem;

      img {
        height: 2.25rem;
        width: 2.25rem;
      }
    }
  }
</style>
