import { tv, type VariantProps } from "tailwind-variants"
import type { Sizes } from "../util/types.js"

export const kbd = tv({
	base: "kbd",
	variants: {
		size: {
			sm: "kbd-sm",
			lg: "kbd-lg",
			md: "kbd-md",
			xs: "kbd-xs",
			xl: "kbd-xl",
			default: "",
		} satisfies Sizes,
	},
	defaultVariants: {
		size: "default",
	},
})

export type KbdStyleProps = VariantProps<typeof kbd>
