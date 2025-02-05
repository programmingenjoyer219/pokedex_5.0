<script>
  var { searchQuery = $bindable("") } = $props();
</script>

<form class="search-form" role="search">
  <label for="search-input" class="sr-only">Search your favorite pokémon</label>
  <input
    type="text"
    id="search-input"
    class="search-input"
    placeholder="I choose you..."
    aria-label="Search"
    autocomplete="off"
    bind:value={searchQuery}
  />
</form>

<style>
  .search-form {
    display: flex;
    padding: 0.75rem;
    background-color: rgb(255, 255, 181);

    margin-bottom: 1rem;
  }

  .search-input {
    flex: 1;
    padding: 0.75rem;
    font-weight: 600;
  }

  .search-input::placeholder {
    color: var(--primary-color);
    font-weight: 700;
    font-size: var(--small);
  }

  .search-input:focus {
    border-color: var(--primary-color);
  }

  .search-form,
  .search-input {
    border: 2px solid #ccc;
    border-radius: var(--border-rounded);
    background: transparent;
  }

  @media (min-width: 600px) {
    .search-form,
    .search-input {
      padding: 1rem;
    }

    .search-input::placeholder {
      font-weight: 600;
      font-size: var(--base);
    }
  }
</style>
