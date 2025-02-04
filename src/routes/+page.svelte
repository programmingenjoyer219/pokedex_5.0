<script>
  import Pagination from "$features/pagination/components/Pagination.svelte";
  import PokemonByType from "$features/search/components/PokemonByType.svelte";
  import SearchBar from "$features/search/components/SearchBar.svelte";
</script>

<section class="section">
  <SearchBar />
  <PokemonByType />
</section>

<main class="section">
  <Pagination />
  <section class="section pokemon-card-wrapper">Hello world</section>
  <Pagination />
</main>
