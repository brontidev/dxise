<script lang="ts">
	import { getContext, type Snippet } from "svelte"
	import { swapContextSymbol, type SwapContext } from "./index.js"
	let {
		element,
	}: {
		element: Snippet<[style: (className: string) => string]>
	} = $props()
	let context = getContext<SwapContext>(swapContextSymbol)
</script>

{#if context}
	{@render element(context.on)}
{/if}
