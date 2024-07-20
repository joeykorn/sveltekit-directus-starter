<script>
	import BlockRenderer from '$lib/block-renderer.svelte';

	export let data;
	const page = data.page;
	const blocks = page?.blocks;
</script>

{#if blocks}
	{#each blocks as { collection }, i}
		<BlockRenderer blockType={collection} block={blocks[i].item} />
	{/each}
{/if}
