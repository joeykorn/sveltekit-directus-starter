import { PUBLIC_DIRECTUS_URL } from '$env/static/public';

export const getDirectusUrl = (path = '') => {
	return `${PUBLIC_DIRECTUS_URL || 'http://localhost:8055'}${path}`;
};

/** @param {string} url */
export const getDirectusMedia = (url) => {
	if (url == null || undefined) {
		return '';
	}
	return `${getDirectusUrl()}/assets/${url}`;
};
