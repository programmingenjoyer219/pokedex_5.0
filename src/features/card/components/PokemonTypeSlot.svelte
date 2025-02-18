<script>
    var { pokemonType } = $props();
</script>

<div
    style:background-color="var(--{pokemonType})"
    class="pokemon-type rounded-capsule"
>
    <img
        src="/pokemon-types/{pokemonType.toLowerCase()}.svg"
        style:background-color="var(--{pokemonType})"
        height={28}
        width={28}
        alt=""
        class="pokemon-type__icon rounded-full"
    />
    <span class="pokemon-type__name">
        {pokemonType}
    </span>
</div>

<style>
    .pokemon-type {
        display: flex;
        align-items: center;
        padding: 0.25rem;
        gap: 0.25rem;
        width: 110px;
    }

    .pokemon-type__icon {
        padding: 0.25rem;
    }

    .pokemon-type__name {
        text-align: center;
        width: 100%;
        color: white;
        font-size: var(--small);
        font-weight: 600;
    }
</style>
