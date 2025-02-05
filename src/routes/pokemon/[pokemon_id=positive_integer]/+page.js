import pokemon_data from "$lib/data.json";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  var { pokemon_id } = params;
  var pokemon = pokemon_data[pokemon_id - 1];
  if (pokemon) {
    return { pokemon };
  } else {
    throw error(404, {
      message: "We couldn't find the pokemon you're looking for.",
    });
  }
}
