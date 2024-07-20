<script>
	/** @type {string} */
	export let heading;
	/** @type {string} */
	export let text;
	/** @type {any} */
	export let links;
</script>

<section>
	{#if heading}
		<h1>
			{heading}
		</h1>
	{/if}

	{#if text}
		<p>
			{text}
		</p>
	{/if}
	{#each links as link}
		<div>
			<a href={link.item.url}>
				{link.item.text}
			</a>
		</div>
	{/each}
</section>
