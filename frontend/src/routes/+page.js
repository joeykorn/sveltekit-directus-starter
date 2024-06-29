import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
  const directus = getDirectusInstance(fetch);
  return {
    global: await directus.request(readItems('global'))
  };
}
