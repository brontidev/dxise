export type Size = "sm" | "lg" | "md" | "xs" | "xl"
export type Sizes = Record<Size | "default", string>

export type Color =
	| "neutral"
	| "primary"
	| "secondary"
	| "accent"
	| "info"
	| "success"
	| "warning"
	| "error"

export type Colors = Record<Color | "default", string>
