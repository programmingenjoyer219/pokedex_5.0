<script>
	import PokemonProfileSlot from './PokemonProfileSlot.svelte';
	import PokemonTypeSlot from './PokemonTypeSlot.svelte';
	import ThreeDimensionalCard from './ThreeDimensionalCard.svelte';

	var { pokemon } = $props();
	var {
		id,
		name: { english: english_name },
		type: pokemon_types,
		profile: { height, weight },
		description
	} = pokemon;
</script>

<ThreeDimensionalCard>
	<a
		aria-label="learn more about {english_name}"
		href="/pokemon/{id}"
		data-border-color={pokemon_types[0].toLowerCase()}
		class="flex flex-col items-center justify-center gap-4 rounded-sm border-2 p-4 shadow-md transition-shadow hover:shadow-lg"
	>
		<img
			loading="lazy"
			src="/images/{id}.webp"
			alt={english_name}
			height="80"
			width="80"
			style:view-transition-name={english_name}
			class="sm:size-[160px]"
		/>
		<p
			data-bg-color={pokemon_types[0].toLowerCase()}
			class="sm:text-heading-sm rounded-sm p-[0.25rem] text-sm font-bold text-white text-shadow-black text-shadow-sm"
		>
			{english_name}
		</p>
		<ul
			aria-label="{english_name} belongs to the type:"
			class="hidden items-center justify-center gap-2 sm:flex"
		>
			{#each pokemon_types as pokemon_type, index (index)}
				<li>
					<PokemonTypeSlot pokemonType={pokemon_type} />
				</li>
			{/each}
		</ul>
		<PokemonProfileSlot {height} {weight} />
	</a>
</ThreeDimensionalCard>
