<script>
	/** @type {string} */
	export let headline;
	/** @type {string} */
	export let title;
	/** @type {string} */
	export let content;
	/** @type {{buttons: Array.<Object.<string, string>> }} button_group */
	export let button_group;
</script>

<section>
	{#if title}
		<h1>
			{title}
		</h1>
	{/if}

	{#if headline}
		<span>
			{headline}
		</span>
	{/if}

	{#if content}
		<p>
			{content}
		</p>
	{/if}

	{#each button_group.buttons as button}
		{button.label}
	{/each}
</section>
