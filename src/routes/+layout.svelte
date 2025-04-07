<script>
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { applyViewTransition } from '$lib/helpers';
	import Header from '$components/Header.svelte';

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
	<link crossorigin rel="preload" as="font" href="/fonts/SpaceMono-Bold.woff" />

	<title>Pokédex | Find your favorite Pokémon</title>

	<meta
		name="description"
		content="Explore a complete Pokédex with detailed Pokémon stats and abilities. Find your favorite Pokémon and become a true Pokémon Master!"
	/>
</svelte:head>

<div class="inline-wrapper flow">
	<Header />
	{@render children()}
</div>
