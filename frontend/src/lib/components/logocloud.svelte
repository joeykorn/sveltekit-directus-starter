<script>
	import { getDirectusMedia } from '$lib/utils/api-helpers';

	/** @type {any} */
	export let logos;
</script>

<section>
	{#each logos as logo}
		<img
			src={getDirectusMedia(logo.directus_files_id.id)}
			title={logo.directus_files_id.title}
			alt={logo.directus_files_id.description}
		/>
	{/each}
</section>
