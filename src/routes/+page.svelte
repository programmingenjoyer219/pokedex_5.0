<script>
  import PokemonCard from "$features/card/components/PokemonCard.svelte";
  import Pagination from "$features/pagination/components/Pagination.svelte";
  import PokemonByType from "$features/search/components/PokemonByType.svelte";
  import SearchBar from "$features/search/components/SearchBar.svelte";
  import pokemon_data from "$lib/data.json";
</script>

<section class="section">
  <SearchBar />
  <PokemonByType />
</section>

<main class="section">
  <Pagination />
  <section class="section pokemon-card-grid">
    {#each pokemon_data as pokemon}
      <PokemonCard {pokemon} />
    {/each}
  </section>
  <Pagination />
</main>

<style>
  .pokemon-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 8.001rem));
    place-content: center;
    gap: 1rem;
  }

  @media (min-width: 600px) {
    .pokemon-card-grid {
      grid-template-columns: repeat(auto-fit, minmax(280px, 281px));
    }
  }
</style>
