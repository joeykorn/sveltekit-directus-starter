import { createDirectus, rest } from '@directus/sdk';
import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from '@directus/sdk';
import { PUBLIC_DIRECTUS_URL } from '$env/static/public';

function getDirectusInstance(fetch) {
  const options = fetch ? { globals: { fetch } } : {};
  const directus = createDirectus(PUBLIC_DIRECTUS_URL, options).with(rest());
  return directus;
}

export default getDirectusInstance;
