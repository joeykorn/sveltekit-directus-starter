import { createDirectus, rest, staticToken } from '@directus/sdk';
import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from '@directus/sdk';
import { PUBLIC_DIRECTUS_URL } from '$env/static/public';
import { DIRECTUS_TOKEN } from '$env/static/private';

/** @param {any} fetch */
export const getDirectusInstance = (fetch) => {
	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(PUBLIC_DIRECTUS_URL, options)
		.with(staticToken(DIRECTUS_TOKEN))
		.with(rest());
	return directus;
};
