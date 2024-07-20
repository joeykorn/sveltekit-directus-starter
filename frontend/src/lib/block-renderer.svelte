<script>
	import { Hero } from '$lib/components';
	import { LogoCloud } from '$lib/components';

	/** @type {{ [key: string]: any; }} blocktypes */
	const blockTypes = {
		block_hero: Hero,
		block_logocloud: LogoCloud
	};

	/** @type {string} */
	export let blockType;
	/** @type {Object} */
	export let block;
</script>

<svelte:component this={blockTypes[blockType]} {...block} />
