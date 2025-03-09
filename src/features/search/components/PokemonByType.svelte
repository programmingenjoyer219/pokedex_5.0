<script>
    import { applyViewTransition } from "$lib/helpers";
    import { POKEMON_TYPES } from "$lib/pokemonTypes";

    var { updatePokemonType } = $props();
</script>

<p class="sr-only">Search pokémon by type</p>
<ul class="rounded-sm">
    <li>
        <button
            style:background-color="var(--clr-blue-500)"
            title="All"
            onclick={applyViewTransition(function handleClick() {
                updatePokemonType(null);
            })}
            class="rounded-sm"
        >
            <img
                src="/favicon.png"
                alt="All pokémons"
                height="28"
                width="28"
                loading="lazy"
            />
        </button>
    </li>
    {#each POKEMON_TYPES as pokemon_type}
        <li>
            <button
                style:background-color="var(--{pokemon_type})"
                title={pokemon_type}
                onclick={applyViewTransition(function handleClick() {
                    updatePokemonType(pokemon_type);
                })}
                class="rounded-sm"
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

<style>
    ul {
        padding: 0.75rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        border: 2px solid var(--clr-blue-500);
        overflow-x: scroll;

        @media (width > 600px) {
            padding: 1rem;
        }
    }

    button {
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

        @media (width > 600px) {
            & {
                padding: 0.5rem;
                height: 3.5rem;
                width: 3.5rem;
            }

            img {
                height: 2.25rem;
                width: 2.25rem;
            }
        }
    }
</style>
