<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import type { DropdownContext } from './index.js';
	let {
		children
	}: {
		children: Snippet<[style: (className?: string) => string]>;
	} = $props();
	let context = getContext<DropdownContext>('_dropdown_style_content');
</script>

{#if context}
	{@render children(context.content)}
{/if}
