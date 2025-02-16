<script lang="ts">
	import type { Snippet } from "svelte"
	import BaseButton from "$lib/ui/actions/component:button/DaisyButton.svelte"
	import type { Props } from "../style:button.js"
	import type { HTMLAttributes } from "svelte/elements"
	let {
		...props
	}: Omit<HTMLAttributes<HTMLElement>, "class" | "style"> & {
		children: Snippet
		class?: string
		style?: Partial<Props>
	} = $props()
</script>

<BaseButton {...props}>
	{#snippet element(props, children)}
		<summary {...props}>{@render children()}</summary>
	{/snippet}
</BaseButton>
