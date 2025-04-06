<script>
	import PokemonTypeSlot from '$features/card/components/PokemonTypeSlot.svelte';
	import StatChart from '$features/card/components/StatChart.svelte';

	var { data } = $props();
	var {
		pokemon: {
			id,
			name: { english: english_name },
			species,
			profile: { height, weight, gender: gender_ratio, ability },
			type: pokemon_types,
			description,
			base: stats
		}
	} = data;

	var commaSeperatedAbilities = ability
		.map(function getAbilityName(a) {
			return a[0];
		})
		.join(', ');
</script>

<svelte:head>
	<title>{english_name}</title>
	<meta name="description" content={description} />
</svelte:head>

<main class="flow">
	<h1
		class="text-heading-base sm:text-heading-md text-primary-500 dark:text-primary-400 text-center font-bold"
	>
		{english_name}
	</h1>

	<div class="grid gap-4 sm:grid-cols-2">
		<img
			loading="lazy"
			src="/images/{id}.webp"
			alt={english_name}
			height="280"
			width="280"
			style:view-transition-name={english_name}
			class="mx-auto"
		/>
		<section class="flow">
			<div>
				<p>
					Species: <span class="text-primary-500 dark:text-primary-400 font-bold">{species}</span>
				</p>
				<p>
					Height: <span class="text-primary-500 dark:text-primary-400 font-bold">{height}</span>
				</p>
				<p>
					Weight: <span class="text-primary-500 dark:text-primary-400 font-bold">{weight}</span>
				</p>
				<p>
					Gender Ratio: <span class="text-primary-500 dark:text-primary-400 font-bold"
						>{gender_ratio}</span
					>
				</p>
				<p>
					Abilities: <span class="text-primary-500 dark:text-primary-400 font-bold"
						>{commaSeperatedAbilities}</span
					>
				</p>
			</div>

			<ul aria-label="{english_name} belongs to the type:" class="flex items-center gap-2">
				{#each pokemon_types as pokemon_type, index (index)}
					<li>
						<PokemonTypeSlot pokemonType={pokemon_type} />
					</li>
				{/each}
			</ul>

			<p>{description}</p>
		</section>
		<StatChart pokemonName={english_name} {stats} />
	</div>
</main>
