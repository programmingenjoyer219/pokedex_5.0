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

{#snippet searchSection()}
	<section class="flow">
		<SearchBar bind:searchQuery />
		<PokemonByType bind:pokemonTypeValue={pokemonType} />
	</section>
{/snippet}

{#snippet pokemonCardsGrid()}
	<div
		class="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_8.01rem))] place-content-center gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(280px,281px))]"
	>
		{#each paginatedData[currentPageIndex] as pokemon (pokemon.id)}
			<PokemonCard {pokemon} />
		{/each}
	</div>
{/snippet}

<div class="flow">
	{@render searchSection()}
	<main class="flow">
		{#if paginatedData[0].length > 0}
			<section class="flow">
				<Pagination {numberOfPages} bind:currentPageIndex />
				{@render pokemonCardsGrid()}
				<Pagination {numberOfPages} bind:currentPageIndex />
			</section>
		{:else}
			<h3 class="text-heading-base text-primary-400 text-center font-bold">No results...</h3>
		{/if}
	</main>
</div>
