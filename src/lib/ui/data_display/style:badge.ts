import { tv, type VariantProps } from "tailwind-variants"
import type { Colors, Sizes } from "../util/types.js"

export const badge = tv({
	base: "badge",
	variants: {
		size: {
			sm: "badge-sm",
			lg: "badge-lg",
			md: "badge-md",
			xs: "badge-xs",
			xl: "badge-xl",
			default: "",
		} satisfies Sizes,
		color: {
			neutral: "badge-neutral",
			primary: "badge-primary",
			secondary: "badge-secondary",
			accent: "badge-accent",
			info: "badge-info",
			success: "badge-success",
			warning: "badge-warning",
			error: "badge-error",
			default: "",
		} satisfies Colors,
		style: {
			outline: "badge-outline",
			dash: "badge-dash",
			soft: "badge-soft",
			ghost: "badge-ghost",
			default: "",
		},
	},
	defaultVariants: {
		color: "default",
		size: "default",
		style: "default",
	},
})

export type BadgeStyleProps = VariantProps<typeof badge>
