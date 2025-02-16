<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import type { HTMLDialogAttributes } from 'svelte/elements';
	import { modal, type Props } from '../style:modal.js';
	import { twMerge } from 'tailwind-merge';
	import { contextSymbol, type ModalContext } from './index.js';
	import { wrap } from '$lib/ui/util/mergeWrap.js';

	let {
		children,
		class: className,
		style,
		...props
	}: Omit<HTMLDialogAttributes, 'class' | 'style' | 'open'> & {
		children: Snippet;
		class?: string;
		style?: Partial<Props>;
	} = $props();

	let { base, action, backdrop, box } = $derived(modal(style));
	let context: ModalContext = $derived({
		action: wrap(action),
		backdrop: wrap(backdrop),
		box: wrap(box)
	})
	setContext(contextSymbol, context);

	let dialog: HTMLDialogElement;

	export function show() {
		dialog.showModal();
	}

	export function close(returnValue?: string) {
		dialog.close(returnValue);
	}
</script>

<dialog bind:this={dialog} class={twMerge(base(), className)} {...props}>
    {@render children()}
</dialog>
