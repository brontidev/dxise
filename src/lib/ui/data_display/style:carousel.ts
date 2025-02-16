import { tv, type VariantProps } from "tailwind-variants"

export const carousel = tv({
	base: "carousel",
	slots: {
		item: "carousel-item",
	},
	variants: {
		snapTo: {
			start: "carousel-start",
			center: "carousel-center",
			end: "carousel-end",
		},
		direction: {
			h: "carousel-horizontal",
			v: "carousel-vertical",
		},
	},
})

export type CarouselStyleProps = VariantProps<typeof carousel>
