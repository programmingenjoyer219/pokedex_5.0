<script>
	import PokemonCard from '$features/card/components/PokemonCard.svelte';
	import Pagination from '$features/pagination/components/Pagination.svelte';
	import PokemonByType from '$features/search/components/PokemonByType.svelte';
	import SearchBar from '$features/search/components/SearchBar.svelte';
	import pokemon_data from '$lib/data.json';
	import { provideFilterCriteria } from '$lib/pokemonSearch';

	const POKEMONS_PER_PAGE = 12;

	var searchQuery = $state('');
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

<section>
	<SearchBar bind:searchQuery />
	<PokemonByType
		updatePokemonType={function updatePokemonType(value) {
			pokemonType = value;
		}}
	/>
</section>

<main>
	{#if paginatedData[0].length > 0}
		<section>
			<Pagination {numberOfPages} bind:currentPageIndex />
			<div>
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
