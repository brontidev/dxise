import { tv, type VariantProps } from "tailwind-variants"

export const collapse = tv({
	base: "collapse",
	slots: {
		title: "collapse-title",
		content: "collapse-content",
	},
	variants: {
		icon: {
			plus: "collapse-plus",
			arrow: "collapse-arrow",
			none: "",
		},
		forceState: {
			true: "collapse-open",
			false: "collapse-closed",
			default: "",
		},
	},
	defaultVariants: {
		icon: "none",
		forceState: "default",
	},
})

export type CollapseStyleProps = VariantProps<typeof collapse>
