<script>
	// https://github.com/micku7zu/vanilla-tilt.js
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';

	var { children } = $props();
	var cardEl = null;

	onMount(function initialiseVanillaTilt() {
		VanillaTilt.init(cardEl);

		return function cleanup() {
			cardEl.vanillaTilt.destroy();
		};
	});
</script>

<div data-tilt bind:this={cardEl}>
	{@render children()}
</div>
