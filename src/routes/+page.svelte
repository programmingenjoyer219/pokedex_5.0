<script>
    import PokemonCard from "$features/card/components/PokemonCard.svelte";
    import Pagination from "$features/pagination/components/Pagination.svelte";
    import PokemonByType from "$features/search/components/PokemonByType.svelte";
    import SearchBar from "$features/search/components/SearchBar.svelte";
    import pokemon_data from "$lib/data.json";
    import {
        prepareSlicingIndexes,
        provideFilterCriteria,
    } from "$lib/pokemonSearch";

    var POKEMONS_PER_PAGE = 12;

    var searchQuery = $state("");
    var pokemonType = $state(null);
    var queriedPokemons = $derived(
        pokemon_data.filter(
            provideFilterCriteria(pokemonType, getSearchQuery())
        )
    );
    var numberOfPages = $derived(
        Math.ceil(queriedPokemons.length / POKEMONS_PER_PAGE)
    );
    var slicingIndexes = $derived.by(
        prepareSlicingIndexes(POKEMONS_PER_PAGE, getNumberOfPages())
    );
    // ******************************************************
    function getSearchQuery() {
        return searchQuery;
    }

    function getNumberOfPages() {
        return numberOfPages;
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
    {#each { length: numberOfPages }, pageIndex}
        <!--  -->
        {@const slicingIndexesForCurrentPage = slicingIndexes[pageIndex]}
        {@const startingPageSliceIndex = slicingIndexesForCurrentPage[0]}
        {@const endingPageSliceIndex = slicingIndexesForCurrentPage[1]}
        {@const currentPageNumber = pageIndex + 1}
        <!--  -->
        <section class="section flow" id="page-{currentPageNumber}">
            <Pagination {currentPageNumber} {numberOfPages} />
            <div class="grid-auto-fit">
                {#each queriedPokemons.slice(startingPageSliceIndex, endingPageSliceIndex) as pokemon (pokemon.id)}
                    <PokemonCard {pokemon} />
                {/each}
            </div>
        </section>
    {:else}
        <h3>No results...</h3>
    {/each}
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
