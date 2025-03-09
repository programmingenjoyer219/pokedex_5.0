export function provideFilterCriteria(pokemonType, searchQuery) {
    return function filterCriteria(currentPokemon) {
        var doesNameMatch = matchPokemonByName(
            searchQuery,
            currentPokemon.name.english
        );
        if (pokemonType) {
            return (
                matchPokemonByType(pokemonType, currentPokemon.type) &&
                doesNameMatch
            );
        } else {
            return doesNameMatch;
        }
    };
}

function matchPokemonByType(typeSearchQuery, currentPokemonType) {
    return currentPokemonType.includes(typeSearchQuery);
}

function matchPokemonByName(nameSearchQuery, currentPokemonName) {
    var regex = new RegExp(nameSearchQuery, "i");
    return regex.test(currentPokemonName);
}
