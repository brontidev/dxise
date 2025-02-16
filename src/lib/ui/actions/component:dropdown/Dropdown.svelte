<script lang="ts">
	import { setContext, type Snippet } from "svelte"
	import { twMerge } from "tailwind-merge"
	import { dropdown, type DropdownStyleProps } from "../style:dropdown.js"
	import type { HTMLDetailsAttributes } from "svelte/elements"
	import type { DropdownContext } from "./index.js"
	import { wrap } from "$lib/ui/util/mergeWrap.js"

	let {
		children,
		class: className,
		style,
		...props
	}: Omit<HTMLDetailsAttributes, "class" | "style"> & {
		children: Snippet
		class?: string
		style?: Partial<DropdownStyleProps>
	} = $props()

	let { base, content } = $derived(dropdown(style))
	let context: DropdownContext = $derived({
		content: wrap(content),
	})
	// svelte-ignore state_referenced_locally
	setContext("_dropdown_style_content", context)
</script>

<details class={twMerge(base(), className)} {...props}>
	{@render children()}
</details>
