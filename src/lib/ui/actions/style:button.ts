import { tv, type VariantProps } from "tailwind-variants"
import type { Sizes } from "../util/types.js"

export const button = tv({
	base: "btn",
	variants: {
		color: {
			neutral: "btn-neutral",
			primary: "btn-primary",
			secondary: "btn-secondary",
			accent: "btn-accent",
			info: "btn-info",
			success: "btn-success",
			warning: "btn-warning",
			error: "btn-error",
			default: "",
		},
		style: {
			outline: "btn-outline",
			soft: "btn-soft",
			ghost: "btn-ghost",
			link: "btn-link",
			default: "",
		},
		disabled: {
			true: "btn-disabled",
		},
		active: {
			true: "btn-active",
		},
		shape: {
			circle: "btn-circle",
			square: "btn-square",
			default: "",
		},
		width: {
			wide: "btn-wide",
			block: "btn-block",
			default: "",
		},
		size: {
			xs: "btn-xs",
			sm: "btn-sm",
			default: "",
			md: "btn-md",
			lg: "btn-lg",
			xl: "btn-xl",
		} satisfies Sizes,
	},
	defaultVariants: {
		active: false,
		disabled: false,
		color: "default",
		width: "default",
		shape: "default",
		size: "default",
		style: "default",
	},
})

export type ButtonStyleProps = VariantProps<typeof button>
