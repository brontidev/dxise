import { tv, type VariantProps } from "tailwind-variants"
import type { Sizes } from "../util/types.js"

export const card = tv({
	base: "card",
	slots: {
		title: "card-title",
		body: "card-body",
		actions: "card-actions",
	},
	variants: {
		border: {
			dash: "card-dash",
			true: "card-border",
			none: "",
		},
		imagePlacement: {
			side: "card-side",
			background: "image-full",
			default: "",
		},
		size: {
			sm: "card-sm",
			lg: "card-lg",
			md: "card-md",
			xs: "card-xs",
			xl: "card-xl",
			default: "",
		} satisfies Sizes,
	},
	defaultVariants: {
		border: "none",
		image: "default",
		size: "default",
	},
})

export type CardStyleProps = VariantProps<typeof card>
