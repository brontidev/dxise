import { tv, type VariantProps } from "tailwind-variants"

export const swap = tv({
	base: "swap",
	variants: {
		style: {
			rotate: "swap-rotate",
			flip: "swap-flip",
		},
		active: {
			true: "swap-active",
		},
	},
	slots: {
		intermediate: "swap-intermediate",
		on: "swap-on",
		off: "swap-off",
	},
})

export type SwapStyleProps = VariantProps<typeof swap>
