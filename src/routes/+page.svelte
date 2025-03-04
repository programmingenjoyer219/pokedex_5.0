<script>
    import PokemonCard from "$features/card/components/PokemonCard.svelte";
    import Pagination from "$features/pagination/components/Pagination.svelte";
    import PokemonByType from "$features/search/components/PokemonByType.svelte";
    import SearchBar from "$features/search/components/SearchBar.svelte";
    import pokemon_data from "$lib/data.json";
    import { provideFilterCriteria } from "$lib/pokemonSearch";

    const POKEMONS_PER_PAGE = 12;

    var searchQuery = $state("");
    var pokemonType = $state(null);
    var queriedPokemons = $derived(
        pokemon_data.filter(provideFilterCriteria(pokemonType, searchQuery))
    );
    var paginatedData = $derived(formatData(queriedPokemons));
    var numberOfPages = $derived(paginatedData.length);
    var currentPageIndex = $state(0);

    $effect(function resetCurrentPageIndex() {
        searchQuery;
        pokemonType;
        currentPageIndex = 0;
    });
    // ************
    function formatData(data) {
        if (data.length <= POKEMONS_PER_PAGE) return [data];
        var pokemonsInPage = data.slice(0, POKEMONS_PER_PAGE);
        return [pokemonsInPage, ...formatData(data.slice(POKEMONS_PER_PAGE))];
    }
</script>

<section class="section flow">
    <SearchBar bind:searchQuery />
    <PokemonByType
        updatePokemonType={function updatePokemonType(value) {
            pokemonType = value;
        }}
    />
</section>

<main class="section">
    {#if paginatedData[0].length > 0}
        <section class="section flow">
            <Pagination {numberOfPages} bind:currentPageIndex />
            <div class="grid-auto-fit">
                {#each paginatedData[currentPageIndex] as pokemon (pokemon.id)}
                    <PokemonCard {pokemon} />
                {/each}
            </div>
            <Pagination {numberOfPages} bind:currentPageIndex />
        </section>
    {:else}
        <h3>No results...</h3>
    {/if}
</main>

<style>
    .grid-auto-fit {
        --grid-auto-fit-min-width: 8rem;
        --grid-auto-fit-max-width: 8.001rem;
        @media (width > 600px) {
            --grid-auto-fit-min-width: 280px;
            --grid-auto-fit-max-width: 281px;
        }
    }

    h3 {
        text-align: center;
        color: var(--clr-blue-500);
        font-weight: 600;
    }
</style>
