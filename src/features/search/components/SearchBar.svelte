<script>
    var { searchQuery = $bindable("") } = $props();
</script>

<form role="search" class="rounded-sm">
    <label for="search-input" class="sr-only"
        >Search your favorite pokémon</label
    >
    <input
        id="search-input"
        class="rounded-sm"
        type="text"
        placeholder="I choose you..."
        aria-label="Search"
        autocomplete="off"
        bind:value={searchQuery}
    />
</form>

<style>
    form {
        display: flex;
        padding: 0.75rem;

        @media (width > 600px) {
            padding: 1rem;
        }
    }

    input {
        flex: 1;
        padding: 0.75rem;
        font-weight: 600;
        font-size: var(--small);

        @media (width > 600px) {
            padding: 1rem;
            font-size: var(--base-font-size);
        }
    }

    input::placeholder {
        color: var(--clr-blue-500);
        font-weight: 700;
    }

    input:focus {
        border-color: var(--clr-blue-500);
    }

    form,
    input {
        border: 2px solid #ccc;
        background: transparent;
    }
</style>
