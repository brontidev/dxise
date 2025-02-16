<script lang="ts">
	import type { Snippet } from 'svelte';
	import BaseButton from './DaisyButton.svelte';
	import type { Props } from '../style:button.js';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	let {
		...props
	}: Omit<HTMLAnchorAttributes, 'class' | 'style'> & {
		children: Snippet;
		class?: string;
		style?: Partial<Props>;
	} = $props();
</script>

<BaseButton {...props}>
	{#snippet element(props, children)}
		<a {...props}>{@render children()}</a>
	{/snippet}
</BaseButton>
