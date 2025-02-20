export function provideFilterCriteria(pokemonType, searchQuery) {
    return function filterCriteria(p) {
        return pokemonType
            ? p.type.includes(pokemonType) &&
                  p.name.english
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
            : p.name.english.toLowerCase().includes(searchQuery.toLowerCase());
    };
}

export function prepareSlicingIndexes(pokemons_per_page, numberOfPages) {
    var result = [];
    var startingPageSliceIndex = 0;
    var endingPageSliceIndex = pokemons_per_page;

    for (let i = 0; i < numberOfPages; i += 1) {
        result.push([startingPageSliceIndex, endingPageSliceIndex]);
        startingPageSliceIndex = endingPageSliceIndex;
        endingPageSliceIndex = startingPageSliceIndex + pokemons_per_page;
    }

    return result;
}
