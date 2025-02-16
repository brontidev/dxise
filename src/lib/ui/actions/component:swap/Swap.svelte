<script lang="ts">
	import { setContext, type Snippet } from "svelte"
	import type { HTMLLabelAttributes } from "svelte/elements"
	import { swap, type SwapStyleProps } from "../style:swap.js"
	import { swapContextSymbol, type SwapContext } from "./index.js"
	import { wrap } from "$lib/ui/util/mergeWrap.js"

	let {
		children,
		class: className,
		style,
		checked = $bindable(false),
		stopdefault = false,
		...props
	}: Omit<HTMLLabelAttributes, "class" | "style" | "open"> & {
		children: Snippet
		class?: string
		style?: Partial<Omit<SwapStyleProps, "active">>
		checked: boolean
		stopdefault?: boolean
	} = $props()

	let { base, intermediate, on, off } = $derived(swap({ active: checked, ...style }))
	let context = $derived({
		intermediate: wrap(intermediate),
		off: wrap(off),
		on: wrap(on),
	})
	setContext<SwapContext>(swapContextSymbol, context)
</script>

<label
	class={base({ className })}
	{...{ ...props, onclick: props.onclick ?? (() => (checked = !checked)) }}
>
	{@render children()}
</label>
