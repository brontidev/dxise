<script lang="ts">
	import type { Snippet } from "svelte"
	import BaseButton from "./DaisyButton.svelte"
	import type { ButtonStyleProps } from "../style:button.js"
	import type { HTMLAnchorAttributes } from "svelte/elements"
	let {
		...props
	}: Omit<HTMLAnchorAttributes, "class" | "style"> & {
		children: Snippet
		class?: string
		style?: Partial<ButtonStyleProps>
	} = $props()
</script>

<BaseButton {...props}>
	{#snippet element(props, children)}
		<a {...props}>{@render children()}</a>
	{/snippet}
</BaseButton>
