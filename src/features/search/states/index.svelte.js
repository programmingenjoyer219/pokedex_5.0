import JSON_DATA from '$lib/data.json';

class SearchPokemon {
	searchByName = $state('');
	searchByType = $state(null);
	/*------------*/
	queriedPokemons = $derived(
		JSON_DATA.filter(this.provideFilterCriteria(this.searchByType, this.searchByName))
	);
	paginatedData = $derived(this.formatData(this.queriedPokemons));
	numberOfPages = $derived(this.paginatedData.length);

	provideFilterCriteria(typeSearchQuery, nameSearchQuery) {
		return function filterCriteria(currentPokemon) {
			var doesNameMatch = matchPokemonByName(nameSearchQuery, currentPokemon.name.english);
			if (typeSearchQuery) {
				return matchPokemonByType(typeSearchQuery, currentPokemon.type) && doesNameMatch;
			} else {
				return doesNameMatch;
			}
		};
		/*------------*/
		function matchPokemonByType(typeSearchQuery, currentPokemonType) {
			return currentPokemonType.includes(typeSearchQuery);
		}

		function matchPokemonByName(nameSearchQuery, currentPokemonName) {
			var regex = new RegExp(nameSearchQuery, 'i');
			return regex.test(currentPokemonName);
		}
	}

	formatData(data, pokemonsPerPage = 12) {
		if (data.length <= pokemonsPerPage) return [data];
		var pokemonsInPage = data.slice(0, pokemonsPerPage);
		return [pokemonsInPage, ...this.formatData(data.slice(pokemonsPerPage))];
	}
}

export var searchPokemon = new SearchPokemon();
