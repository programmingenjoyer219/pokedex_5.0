import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export async function load() {
  return redirect(303, "/pokemon/1");
}
