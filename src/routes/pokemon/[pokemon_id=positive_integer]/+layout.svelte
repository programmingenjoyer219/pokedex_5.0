<script>
    var { children, data } = $props();
    var {
        pokemon: {
            name: { english: english_name },
        },
    } = data;
</script>

<main class="section flow">
    <h1>{english_name}</h1>
    <div class="layout">
        {@render children()}
    </div>
</main>

<style>
    h1 {
        text-align: center;
        font-weight: 600;
        color: var(--clr-blue-500);
    }

    .layout {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        @media (width > 600px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
