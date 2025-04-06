<script>
	var { pokemonType } = $props();
</script>

<div
	data-bg-color={pokemonType.toLowerCase()}
	class="flex w-[110px] items-center gap-1 rounded-full p-1"
>
	<img
		src="/pokemon-types/{pokemonType.toLowerCase()}.svg"
		height={28}
		width={28}
		alt=""
		class="p-1"
	/>
	<span class="w-full text-center text-sm font-bold text-white text-shadow-black text-shadow-sm">
		{pokemonType}
	</span>
</div>
