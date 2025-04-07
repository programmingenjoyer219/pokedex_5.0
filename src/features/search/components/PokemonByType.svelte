<script>
	import POKEMON_TYPES from '$lib/pokemonTypes.json';
	import { applyViewTransition, capitalize } from '$lib/helpers';

	var { searchByType = $bindable(null) } = $props();
</script>

{#snippet searchPokemonByTypeBtn(pokemonType)}
	{@const title = pokemonType ? pokemonType : 'All'}
	{@const src = pokemonType ? `/pokemon-types/${pokemonType}.svg` : '/favicon.png'}
	<button
		data-bg-color={pokemonType ? pokemonType : 'primary-500'}
		{title}
		onclick={applyViewTransition(function updatePokemonTypeValue() {
			searchByType = pokemonType === null ? null : capitalize(pokemonType);
		})}
		class="flex size-[3rem] flex-0 items-center justify-center rounded-sm p-0.5 transition-transform hover:scale-110 sm:size-[3.5rem] sm:p-1"
	>
		<img {src} alt="" height="28" width="28" loading="lazy" class="sm:size-[2.25rem]" />
	</button>
{/snippet}

<ul
	aria-label="Search pokémon by type"
	class="border-primary-400 flex items-center gap-4 overflow-x-scroll rounded-sm border-2 p-3 sm:p-4"
>
	<li>
		{@render searchPokemonByTypeBtn(null)}
	</li>
	{#each POKEMON_TYPES as pokemonType (pokemonType)}
		<li>
			{@render searchPokemonByTypeBtn(pokemonType)}
		</li>
	{/each}
</ul>
