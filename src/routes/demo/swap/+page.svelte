<script lang=ts>
	import Swap from "$lib/ui/actions/component:swap/Swap.svelte"
	import SwapIntermediate from "$lib/ui/actions/component:swap/SwapIntermediate.svelte"
	import SwapOff from "$lib/ui/actions/component:swap/SwapOff.svelte"
	import SwapOn from "$lib/ui/actions/component:swap/SwapOn.svelte"
	import { button } from "$lib/ui/actions/style:button.js"
	import { twMerge } from "tailwind-merge"

    let checked: boolean = false;
</script>
<Swap class={twMerge(button({ width: "block" }), "kbd !kbd-xl")} bind:checked>
    <SwapOn>{#snippet element(style)}
        <div class={style('text-success')}>y</div>
    {/snippet}</SwapOn>
    <SwapIntermediate>{#snippet element(style)}
        <span class={style()}>/</span>
    {/snippet}</SwapIntermediate>
    <SwapOff>{#snippet element(style)}
        <div class={style('text-error')}>n</div>
    {/snippet}</SwapOff>
</Swap>