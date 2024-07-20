import { getDirectusInstance } from '$lib/utils/fetch-api';
import { readItems } from '@directus/sdk';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		global: await directus.request(readItems('global'))
	};
}
