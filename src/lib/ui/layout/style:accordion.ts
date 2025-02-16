import { tv, type VariantProps } from "tailwind-variants"

export const accordion = tv({
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

export type Props = VariantProps<typeof accordion>
