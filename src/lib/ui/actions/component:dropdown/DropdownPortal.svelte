<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	let {
		children
	}: {
		children: Snippet<[style: (className: string) => string]>;
	} = $props();
	let content = getContext<(className: string) => string>('_dropdown_style_content');
</script>

{#if content}
	{@render children(content)}
{/if}
