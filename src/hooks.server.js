/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	var response = await resolve(event, {
		preload({ type }) {
			return type == 'font';
		}
	});

	return response;
}
