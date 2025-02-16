<script lang="ts">
	import { setContext, type Snippet } from "svelte"
	import type { HTMLLabelAttributes } from "svelte/elements"
	import { swap, type Props } from "../style:swap.js"
	import { contextSymbol, type SwapContext } from "./index.js"
	import { wrap } from "$lib/ui/util/mergeWrap.js"
	import { twMerge } from "tailwind-merge"

    let {
		children,
		class: className,
		style,
        checked = $bindable(false),
        stopdefault = false,
		...props
	}: Omit<HTMLLabelAttributes, 'class' | 'style' | 'open'> & {
		children: Snippet;
		class?: string;
		style?: Partial<Omit<Props, 'active'>>;
        checked: boolean;
        stopdefault?: boolean;
	} = $props();

    let { base, intermediate, on, off } = $derived(swap({ active: checked, ...style }))
    let context = $derived({
        intermediate: wrap(intermediate),
        off: wrap(off),
        on: wrap(on)
    })
    setContext<SwapContext>(contextSymbol, context)
</script>

<!-- 
<label class="swap">
    <input type="checkbox" />
    <div class="swap-on">ON</div>
    <div class="swap-off">OFF</div>
</label>

<Swap bind:checked={someBoolean}>
    <SwapOn>{#snippet element(style)}
        <div class={style()}>ON</div>
    {/snippet}</SwapOn>
    <SwapOff>{#snippet element(style)}
        <div class={style()}>OFF</div>
    {/snippet}</SwapOff>
</Swap>
-->

<label class={twMerge(base(), className)} {...{ ...props, onclick: props.onclick ?? (() => checked = !checked) }}>
    {@render children()}
</label>