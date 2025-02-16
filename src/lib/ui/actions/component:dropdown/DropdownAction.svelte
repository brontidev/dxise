<script lang="ts">
	import type { Snippet } from "svelte"
	import BaseButton from "$lib/ui/actions/component:button/DaisyButton.svelte"
	import type { ButtonStyleProps } from "../style:button.js"
	import type { HTMLAttributes } from "svelte/elements"
	let {
		...props
	}: Omit<HTMLAttributes<HTMLElement>, "class" | "style"> & {
		children: Snippet
		class?: string
		style?: Partial<ButtonStyleProps>
	} = $props()
</script>

<BaseButton {...props}>
	{#snippet element(props, children)}
		<summary {...props}>{@render children()}</summary>
	{/snippet}
</BaseButton>
