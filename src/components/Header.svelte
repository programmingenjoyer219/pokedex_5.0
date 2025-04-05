<script>
	import ThemeSwitch from './ThemeSwitch.svelte';
</script>

<header class="flex items-center">
	<a href="/" class="relative left-4 mx-auto">
		<img
			src="/pokemon-logo.webp"
			alt="Pokedex version 5.0"
			height="63"
			width="150"
			fetchpriority="high"
			class="sm:h-[84px] sm:w-[200px]"
		/>
	</a>
	<ThemeSwitch />
</header>
