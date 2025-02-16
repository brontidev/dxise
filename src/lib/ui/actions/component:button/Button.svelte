<script lang="ts">
	import type { Snippet } from "svelte"
	import BaseButton from "./DaisyButton.svelte"
	import type { ButtonStyleProps } from "../style:button.js"
	import type { HTMLButtonAttributes } from "svelte/elements"
	let {
		...props
	}: Omit<HTMLButtonAttributes, "class" | "style"> & {
		children: Snippet
		class?: string
		style?: Partial<ButtonStyleProps>
	} = $props()
</script>

<BaseButton {...props}>
	{#snippet element(props, children)}
		<button {...props}>{@render children()}</button>
	{/snippet}
</BaseButton>
