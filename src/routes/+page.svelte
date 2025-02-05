<script>
  import PokemonCard from "$features/card/components/PokemonCard.svelte";
  import Pagination from "$features/pagination/components/Pagination.svelte";
  import PokemonByType from "$features/search/components/PokemonByType.svelte";
  import SearchBar from "$features/search/components/SearchBar.svelte";
  import pokemon_data from "$lib/data.json";

  var POKEMONS_PER_PAGE = 12;

  var searchQuery = $state("");
  var pokemonType = $state(null);
  var queriedPokemons = $derived(pokemon_data.filter(getRequiredPokemons));
  var numberOfPages = $derived(
    Math.ceil(queriedPokemons.length / POKEMONS_PER_PAGE)
  );
  var slicingIndexes = $derived.by(prepareSlicingIndexes);
  // **********************************************************************
  function getRequiredPokemons(p) {
    return pokemonType
      ? p.type.includes(pokemonType) &&
          p.name.english.toLowerCase().includes(searchQuery.toLowerCase())
      : p.name.english.toLowerCase().includes(searchQuery.toLowerCase());
  }

  function prepareSlicingIndexes() {
    var result = [];
    var startingPageSliceIndex = 0;
    var endingPageSliceIndex = POKEMONS_PER_PAGE;

    for (let i = 0; i < numberOfPages; i += 1) {
      result.push([startingPageSliceIndex, endingPageSliceIndex]);
      startingPageSliceIndex = endingPageSliceIndex;
      endingPageSliceIndex = startingPageSliceIndex + POKEMONS_PER_PAGE;
    }

    return result;
  }
</script>

<section class="section">
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
    <div class="pagination-card-grid-wrapper" id="page-{currentPageNumber}">
      <Pagination {currentPageNumber} {numberOfPages} />
      <section class="section pokemon-card-grid">
        {#each queriedPokemons.slice(startingPageSliceIndex, endingPageSliceIndex) as pokemon (pokemon.id)}
          <PokemonCard {pokemon} />
        {/each}
      </section>
    </div>
  {:else}
    <h3>No results...</h3>
  {/each}
</main>

<style>
  .pokemon-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 8.001rem));
    place-content: center;
    gap: 1rem;
  }

  h3 {
    text-align: center;
    color: var(--primary-color-light);
    font-weight: 600;
  }

  @media (min-width: 600px) {
    .pokemon-card-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 281px));
    }
  }
</style>
