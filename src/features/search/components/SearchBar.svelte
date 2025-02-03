<form class="search-form" role="search">
  <label for="search-input" class="sr-only">Search your favorite pokémon</label>
  <input
    type="text"
    id="search-input"
    class="search-input"
    placeholder="I choose you..."
    aria-label="Search"
    autocomplete="off"
  />
</form>

<style>
  .search-form {
    display: flex;
    padding: 1rem;
    background-color: rgb(255, 255, 181);

    margin-bottom: 1rem;
  }

  .search-input {
    flex: 1;
    padding: 1rem;
    font-weight: 600;
  }

  .search-input::placeholder {
    color: var(--primary-color);
    font-weight: 600;
  }

  .search-input:focus {
    border-color: var(--primary-color);
  }

  .search-form,
  .search-input {
    border: 2px solid #ccc;
    border-radius: 0.25rem;
    background: transparent;
  }
</style>
