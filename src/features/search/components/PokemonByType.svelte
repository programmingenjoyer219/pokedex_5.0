<script>
  var pokemon_types = [
    "Bug",
    "Dark",
    "Dragon",
    "Electric",
    "Fairy",
    "Fighting",
    "Fire",
    "Flying",
    "Ghost",
    "Grass",
    "Ground",
    "Ice",
    "Normal",
    "Poison",
    "Psychic",
    "Rock",
    "Steel",
    "Water",
  ];
</script>

<p class="sr-only">Search pokémon by type</p>
<ul class="pokemon-type-buttons-wrapper">
  {#each pokemon_types as pokemon_type}
    <li>
      <button
        class="pokemon-type-button"
        style:background-color="var(--{pokemon_type})"
        title={pokemon_type}
      >
        <img
          src="/pokemon-types/{pokemon_type.toLowerCase()}.svg"
          alt={pokemon_type}
          height="36"
          width="36"
        />
      </button>
    </li>
  {/each}
</ul>

<style>
  .pokemon-type-buttons-wrapper {
    padding: 1rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    border: 2px solid var(--primary-color);
    border-radius: 0.25rem;

    overflow-x: scroll;
  }

  .pokemon-type-button {
    border: none;
    border-radius: 0.25rem;

    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    height: 3.5rem;
    width: 3.5rem;

    cursor: pointer;

    transition:
      opacity 150ms,
      transform 150ms;

    &:hover {
      opacity: 0.8;
      transform: scale(110%);
    }

    &:active {
      opacity: 0.5;
    }
  }
</style>
