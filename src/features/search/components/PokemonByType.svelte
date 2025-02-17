<script>
    import { POKEMON_TYPES } from "$lib/pokemonTypes";

    var { updatePokemonType } = $props();
</script>

<p class="sr-only">Search pokémon by type</p>
<ul>
    {#each POKEMON_TYPES as pokemon_type}
        <li>
            <button
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
                    loading="lazy"
                />
            </button>
        </li>
    {/each}
</ul>
