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
