<script>
	import { debounce } from '$lib/helpers';

	var { searchQuery = $bindable('') } = $props();

	var updateSearchQuery = debounce(200)(function updateSearchQuery(e) {
		searchQuery = e.target.value;
	});
</script>

<form role="search">
	<label for="search-input">Search your favorite pokémon</label>
	<input
		id="search-input"
		type="text"
		placeholder="I choose you..."
		aria-label="Search"
		autocomplete="off"
		oninput={updateSearchQuery}
	/>
</form>
