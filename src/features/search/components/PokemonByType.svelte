<script>
	import { applyViewTransition } from '$lib/helpers';
	import { POKEMON_TYPES } from '$lib/pokemonTypes';

	var { updatePokemonType } = $props();
</script>

<p>Search pokémon by type</p>
<ul>
	<li>
		<button
			style:background-color="var(--clr-blue-500)"
			title="All"
			onclick={applyViewTransition(function handleClick() {
				updatePokemonType(null);
			})}
		>
			<img src="/favicon.png" alt="All pokémons" height="28" width="28" loading="lazy" />
		</button>
	</li>
	{#each POKEMON_TYPES as pokemon_type}
		<li>
			<button
				style:background-color="var(--{pokemon_type})"
				title={pokemon_type}
				onclick={applyViewTransition(function handleClick() {
					updatePokemonType(pokemon_type);
				})}
			>
				<img
					src="/pokemon-types/{pokemon_type.toLowerCase()}.svg"
					alt={pokemon_type}
					height="28"
					width="28"
					loading="lazy"
				/>
			</button>
		</li>
	{/each}
</ul>
