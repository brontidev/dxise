<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { contextSymbol, type SwapContext } from './index.js';
	let {
		element
	}: {
		element: Snippet<[style: (className?: string) => string]>;
	} = $props();
	let context = getContext<SwapContext>(contextSymbol);
</script>

{#if context}
	{@render element(context.off)}
{/if}
