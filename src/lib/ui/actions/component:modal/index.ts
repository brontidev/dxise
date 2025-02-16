import { modal } from "../style:modal.js"

import Modal from "./Modal.svelte"
import ModalBackdrop from "./ModalBackdrop.svelte"
import ModalBox from "./ModalBox.svelte"

export type ModalContext = Record<
	keyof Omit<ReturnType<typeof modal>, "base" | "toggle">,
	(className?: string) => string
>
export const contextSymbol = Symbol("modal context")

export {
	modal,
	Modal as Root,
	ModalBackdrop as Backdrop,
	ModalBox as Box,
	Modal,
	ModalBackdrop,
	ModalBox,
}
