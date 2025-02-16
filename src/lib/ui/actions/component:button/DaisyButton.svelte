<script lang="ts">
	import type { Snippet } from "svelte"
	import { twMerge } from "tailwind-merge"
	import { button, type ButtonStyleProps } from "../style:button.js"
	let {
		children,
		element,
		class: className,
		style,
		...rest
	}: {
		children: Snippet
		element: Snippet<[props: { [x: string]: unknown }, children: Snippet]>
		class?: string
		style?: Partial<ButtonStyleProps>
		[x: string]: unknown
	} = $props()

	let _props = $derived({
		class: button({ ...style, className }),
		...rest,
	})
</script>

{@render element(_props, children)}
