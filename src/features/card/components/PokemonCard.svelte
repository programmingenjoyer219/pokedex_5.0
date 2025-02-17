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

<a href="/pokemon/{id}" style:border="2px solid var(--{pokemon_types[0]})">
    <img
        loading="lazy"
        src="/images/{id}.webp"
        alt="{english_name}. {description}"
        height="80"
        width="80"
    />
    <p style:background-color="var(--{pokemon_types[0]})">
        {english_name}
    </p>
    <ul aria-label="{english_name} belongs to the type:">
        {#each pokemon_types as pokemon_type, index (index)}
            <li>
                <PokemonTypeSlot pokemonType={pokemon_type} />
            </li>
        {/each}
    </ul>
    <PokemonProfileSlot {height} {weight} />
</a>
