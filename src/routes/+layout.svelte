<script>
	import '../app.css';
	import ThemeSwitch from '$components/ThemeSwitch.svelte';
	import { onNavigate } from '$app/navigation';
	import { applyViewTransition } from '$lib/helpers';

	var { children } = $props();

	onNavigate(function handleNavigate(navigation) {
		return new Promise(function executor(resolve) {
			applyViewTransition(async function resolvePromise() {
				resolve();
				await navigation.complete;
			})();
		});
	});
</script>

<svelte:head>
	<link crossorigin rel="preload" as="font" href="/fonts/SpaceMono-Regular.woff" />
	<link crossorigin rel="preload" as="font" href="/fonts/SpaceMono-Italic.woff" />
	<link crossorigin rel="preload" as="font" href="/fonts/SpaceMono-Bold.woff" />
	<link crossorigin rel="preload" as="font" href="/fonts/SpaceMono-BoldItalic.woff" />

	<title>Pokédex | Find your favorite Pokémon</title>

	<meta
		name="description"
		content="Explore a complete Pokédex with detailed Pokémon stats and abilities. Find your favorite Pokémon and become a true Pokémon Master!"
	/>
</svelte:head>

<div>
	<header>
		<a href="/">
			<img
				src="/pokemon-logo.webp"
				alt="Pokedex version 5.0"
				height="63"
				width="150"
				fetchpriority="high"
			/>
		</a>
		<ThemeSwitch />
	</header>
	{@render children()}
</div>
