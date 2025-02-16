<script lang="ts">
	import { getContext, type Snippet } from "svelte"
	import { contextSymbol, type ModalContext } from "./index.js"
	import type { HTMLAttributes } from "svelte/elements"

	let {
		children,
		class: className = "",
		...props
	}: Omit<HTMLAttributes<HTMLElement>, "class" | "style"> & {
		children: Snippet
		class?: string
	} = $props()

	let context = getContext<ModalContext>(contextSymbol)
</script>

{#if context}
	<div class={context.box(className)} {...props}>
		{@render children()}
	</div>
{/if}
