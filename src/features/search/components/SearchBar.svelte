<script>
    var { searchQuery = $bindable("") } = $props();
</script>

<form role="search">
    <label for="search-input" class="sr-only"
        >Search your favorite pokémon</label
    >
    <input
        type="text"
        id="search-input"
        placeholder="I choose you..."
        aria-label="Search"
        autocomplete="off"
        bind:value={searchQuery}
    />
</form>
