<script>
	import PokemonCard from '$features/card/components/PokemonCard.svelte';
	import Pagination from '$features/pagination/components/Pagination.svelte';
	import { pagination } from '$features/pagination/states/index.svelte';
	import PokemonByType from '$features/search/components/PokemonByType.svelte';
	import SearchBar from '$features/search/components/SearchBar.svelte';
	import { searchPokemon } from '$features/search/states/index.svelte';

	$effect(function resetCurrentPageIndex() {
		searchPokemon.searchByName;
		searchPokemon.searchByType;
		pagination.currentPageIndex = 0;
	});
</script>

{#snippet searchSection()}
	<section class="flow">
		<SearchBar bind:searchQuery={searchPokemon.searchByName} />
		<PokemonByType bind:pokemonTypeValue={searchPokemon.searchByType} />
	</section>
{/snippet}

{#snippet pokemonCardsGrid()}
	<div
		class="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_8.01rem))] place-content-center gap-4 sm:grid-cols-[repeat(auto-fit,_minmax(280px,281px))]"
	>
		{#each searchPokemon.paginatedData[pagination.currentPageIndex] as pokemon (pokemon.id)}
			<PokemonCard {pokemon} />
		{/each}
	</div>
{/snippet}

<div class="flow">
	{@render searchSection()}
	<main class="flow">
		{#if searchPokemon.paginatedData[0].length > 0}
			<section class="flow">
				<Pagination
					numberOfPages={searchPokemon.numberOfPages}
					bind:currentPageIndex={pagination.currentPageIndex}
				/>
				{@render pokemonCardsGrid()}
				<Pagination
					numberOfPages={searchPokemon.numberOfPages}
					bind:currentPageIndex={pagination.currentPageIndex}
				/>
			</section>
		{:else}
			<h3 class="text-heading-base text-primary-400 text-center font-bold">No results...</h3>
		{/if}
	</main>
</div>
