<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { dropdown, type Props } from '../style:dropdown.js';
	import type { HTMLDetailsAttributes } from 'svelte/elements';
	let {
		children,
		class: className,
		style,
		...props
	}: Omit<HTMLDetailsAttributes, 'class' | 'style'> & {
		children: Snippet;
		class?: string;
		style?: Partial<Props>;
	} = $props();

	let { base, content } = $derived(dropdown(style));
	setContext('_dropdown_style_content', (className: string) => twMerge(content(), className));
</script>

<details class={twMerge(base(), className)} {...props}>
	{@render children()}
</details>
