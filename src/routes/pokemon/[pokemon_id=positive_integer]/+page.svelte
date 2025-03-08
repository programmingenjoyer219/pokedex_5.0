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

<svelte:head>
    <title>{english_name}</title>
    <meta name="description" content={description} />
</svelte:head>

<img
    loading="lazy"
    src="/images/{id}.webp"
    alt="{english_name}. {description}"
    height="280"
    width="280"
    class="pokemon-image"
    style:view-transition-name={english_name}
/>

<section class="flow">
    <div class="info">
        <p>Species: <span>{species}</span></p>
        <p>Height: <span>{height}</span></p>
        <p>Weight: <span>{weight}</span></p>
        <p>
            Gender Ratio: <span>{gender_ratio}</span>
        </p>
        <p>
            Abilities: <span>{commaSeperatedAbilities}</span>
        </p>
    </div>

    <ul aria-label="{english_name} belongs to the type:" class="flex-group">
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

    .info span {
        color: var(--clr-blue-500);
        font-weight: 600;
    }
</style>
