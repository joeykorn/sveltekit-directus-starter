import { error } from '@sveltejs/kit';
import { getDirectusInstance } from '$lib/utils/fetch-api';
import { readItems } from '@directus/sdk';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);
	const slug = params.slug;

	const pages = await directus.request(
		readItems('pages', {
			filter: {
				slug: { _eq: slug }
			},
			fields: [
				'*',
				{
					blocks: [
						'*',
						{
							item: {
								block_hero: ['*', { links: ['*', { item: ['*'] }] }],
								block_logocloud: ['*', { logos: ['*', { directus_files_id: ['*'] }] }]
							}
						}
					]
				}
			],
			limit: 1
		})
	);
	const page = pages[0];

	try {
		return { page };
	} catch (err) {
		throw error(404, 'Page not found');
	}
}
