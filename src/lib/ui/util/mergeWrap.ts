import type { TVReturnType } from "tailwind-variants"

export function wrap(
	// @ts-expect-error: The generics are not needed here
	fn: TVReturnType
): (className?: string) => string {
	return (className) => {
		return fn({ className })
	}
}
