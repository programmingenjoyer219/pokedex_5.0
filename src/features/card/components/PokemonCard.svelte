<script>
    import PokemonProfileSlot from "./PokemonProfileSlot.svelte";
    import PokemonTypeSlot from "./PokemonTypeSlot.svelte";
    import ThreeDimensionalCard from "./ThreeDimensionalCard.svelte";

    var { pokemon } = $props();
    var {
        id,
        name: { english: english_name },
        type: pokemon_types,
        profile: { height, weight },
        description,
    } = pokemon;
</script>

<ThreeDimensionalCard>
    <a
        href="/pokemon/{id}"
        style:border="2px solid var(--{pokemon_types[0]})"
        class="card rounded-md"
    >
        <img
            loading="lazy"
            src="/images/{id}.webp"
            alt="{english_name}. {description}"
            height="80"
            width="80"
            class="card__image"
            style:view-transition-name={english_name}
        />
        <p
            class="card__title rounded-sm text-shadow"
            style:background-color="var(--{pokemon_types[0]})"
        >
            {english_name}
        </p>
        <ul class="card__list" aria-label="{english_name} belongs to the type:">
            {#each pokemon_types as pokemon_type, index (index)}
                <li>
                    <PokemonTypeSlot pokemonType={pokemon_type} />
                </li>
            {/each}
        </ul>
        <PokemonProfileSlot {height} {weight} />
    </a>
</ThreeDimensionalCard>

<style>
    .card {
        transition: box-shadow 150ms;

        &:hover {
            box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.15);
        }
    }

    .card__title {
        padding: 0.25rem;
        font-weight: 600;
        color: white;
        font-size: var(--small);

        @media (width > 600px) {
            font-size: var(--h5);
        }
    }

    .card__image {
        @media (width > 600px) {
            height: 160px;
            width: 160px;
        }
    }

    .card__list {
        display: none;

        @media (width > 600px) {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }
    }
</style>
