import { tv, type VariantProps } from "tailwind-variants"

export const avatar = tv({
	base: "avatar",
	variants: {
		state: {
			online: "avatar-online",
			offline: "avatar-offline",
			none: "",
		},
		placeholder: {
			true: "collapse-open",
			false: "",
		},
	},
	defaultVariants: {
		state: "none",
		forceState: false,
	},
})

export type AvatarStyleProps = VariantProps<typeof avatar>

export const avatarGroup = tv({
	base: "avatar-group",
})

export type AvatarGroupStyleProps = VariantProps<typeof avatarGroup>
