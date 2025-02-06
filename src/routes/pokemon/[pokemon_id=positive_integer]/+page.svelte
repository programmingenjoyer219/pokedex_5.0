<script>
  import PokemonTypeSlot from "$features/card/components/PokemonTypeSlot.svelte";
  import StatChart from "$features/card/components/StatChart.svelte";

  var { data } = $props();
  var {
    pokemon: {
      id,
      name: { english: english_name },
      species,
      profile: { height, weight, gender: gender_ratio, ability },
      type: pokemon_types,
      description,
      base: stats,
    },
  } = data;

  var commaSeperatedAbilities = ability
    .map(function getAbilityName(a) {
      return a[0];
    })
    .join(", ");
</script>

<img
  loading="lazy"
  src="/images/{id}.webp"
  alt="{english_name}. {description}"
  height="280"
  width="280"
  class="pokemon-image"
/>

<section class="pokemon-info">
  <div>
    <p>Species: <span class="text-color-primary">{species}</span></p>
    <p>Height: <span class="text-color-primary">{height}</span></p>
    <p>Weight: <span class="text-color-primary">{weight}</span></p>
    <p>
      Gender Ratio: <span class="text-color-primary">{gender_ratio}</span>
    </p>
    <p>
      Abilities: <span class="text-color-primary"
        >{commaSeperatedAbilities}</span
      >
    </p>
  </div>

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

  <p>{description}</p>
</section>

<StatChart pokemonName={english_name} {stats} />

<style>
  .pokemon-image {
    margin-inline: auto;
  }

  .text-color-primary {
    color: var(--primary-color);
    font-weight: 600;
  }

  .pokemon-type-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .pokemon-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-block-end: 1rem;

    grid-column: 2/3;
  }
</style>
