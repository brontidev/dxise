<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { button, type Props } from '../style:button.js';
	let {
		children,
		element,
		class: className,
		style,
		...rest
	}: {
		children: Snippet;
		element: Snippet<[props: { [x: string]: unknown }, children: Snippet]>;
		class?: string;
		style?: Partial<Props>;
		[x: string]: unknown;
	} = $props();

	let _props = $derived({
		class: twMerge(button(style), className),
		...rest
	});
</script>

{@render element(_props, children)}
