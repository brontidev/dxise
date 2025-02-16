<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { contextSymbol, type ModalContext } from './index.js';
	import type { HTMLFormAttributes } from 'svelte/elements';

	let {
		children,
		class: className,
		...props
	}: Omit<HTMLFormAttributes, 'class' | 'style' | 'action' | 'method'> & {
		children: Snippet;
		class?: string;
	} = $props();

	let context = getContext<ModalContext>(contextSymbol);
</script>
{#if context}
<form method="dialog" class={context.backdrop(className)} {...props}>
	{@render children()}
</form>
{/if}