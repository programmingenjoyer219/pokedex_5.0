<script>
	import { POKEMON_TYPES } from '$lib/pokemonTypes';
	import { applyViewTransition, capitalize } from '$lib/helpers';

	var { pokemonTypeValue = $bindable(null) } = $props();
</script>

{#snippet pokemonByTypeBtn(pokemonType)}
	{@const title = pokemonType ? pokemonType : 'All'}
	{@const src = pokemonType ? `/pokemon-types/${pokemonType}.svg` : '/favicon.png'}
	<button
		data-bg-color={pokemonType ? pokemonType : 'primary-500'}
		{title}
		onclick={applyViewTransition(function updatePokemonTypeValue() {
			pokemonTypeValue = capitalize(pokemonType);
		})}
		class="flex size-[3rem] flex-0 items-center justify-center rounded-sm p-0.5 transition-transform hover:scale-110 sm:size-[3.5rem] sm:p-1"
	>
		<img {src} alt="" height="28" width="28" loading="lazy" class="sm:size-[2.25rem]" />
	</button>
{/snippet}

<p id="search-by-type-label" class="sr-only">Search pokémon by type</p>
<ul
	aria-labelledby="search-by-type-label"
	class="border-primary-400 flex items-center gap-4 overflow-x-scroll rounded-sm border-2 p-3 sm:p-4"
>
	<li>
		{@render pokemonByTypeBtn(null)}
	</li>
	{#each POKEMON_TYPES as pokemonType (pokemonType)}
		<li>
			{@render pokemonByTypeBtn(pokemonType)}
		</li>
	{/each}
</ul>

<style>
	[data-bg-color='primary-500'] {
		background-color: var(--color-primary-500);
	}

	[data-bg-color='bug'] {
		background-color: var(--color-bug);
	}

	[data-bg-color='dark'] {
		background-color: var(--color-dark);
	}

	[data-bg-color='dragon'] {
		background-color: var(--color-dragon);
	}

	[data-bg-color='electric'] {
		background-color: var(--color-electric);
	}

	[data-bg-color='fairy'] {
		background-color: var(--color-fairy);
	}

	[data-bg-color='fighting'] {
		background-color: var(--color-fighting);
	}

	[data-bg-color='fire'] {
		background-color: var(--color-fire);
	}

	[data-bg-color='flying'] {
		background-color: var(--color-flying);
	}

	[data-bg-color='ghost'] {
		background-color: var(--color-ghost);
	}

	[data-bg-color='grass'] {
		background-color: var(--color-grass);
	}

	[data-bg-color='ground'] {
		background-color: var(--color-ground);
	}

	[data-bg-color='ice'] {
		background-color: var(--color-ice);
	}

	[data-bg-color='normal'] {
		background-color: var(--color-normal);
	}

	[data-bg-color='poison'] {
		background-color: var(--color-poison);
	}

	[data-bg-color='psychic'] {
		background-color: var(--color-psychic);
	}

	[data-bg-color='rock'] {
		background-color: var(--color-rock);
	}

	[data-bg-color='steel'] {
		background-color: var(--color-steel);
	}

	[data-bg-color='water'] {
		background-color: var(--color-water);
	}
</style>
