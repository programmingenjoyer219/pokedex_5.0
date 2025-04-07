<script>
	import { debounce } from '$lib/helpers';

	var { searchByName = $bindable('') } = $props();

	var updateSearchQuery = debounce(200)(function updateSearchQuery(e) {
		searchByName = e.target.value;
	});
</script>

<form role="search" class="border-gray flex rounded-sm border-2 p-3 sm:p-4">
	<label class="sr-only" for="search-input">Search your favorite pokémon</label>
	<input
		id="search-input"
		type="text"
		placeholder="I choose you..."
		aria-label="Search"
		autocomplete="off"
		oninput={updateSearchQuery}
		value={searchByName}
		class="border-gray focus:border-primary-500 placeholder:text-primary-500 dark:placeholder:text-primary-400 flex-1 rounded-sm border-2 p-3 text-sm font-bold sm:p-4 sm:text-base"
	/>
</form>
