<script>
	var { pokemonType } = $props();
</script>

<div style:background-color="var(--{pokemonType})">
	<img
		src="/pokemon-types/{pokemonType.toLowerCase()}.svg"
		style:background-color="var(--{pokemonType})"
		height={28}
		width={28}
		alt=""
	/>
	<span>
		{pokemonType}
	</span>
</div>
