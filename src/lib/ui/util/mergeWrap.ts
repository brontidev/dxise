import { twMerge } from "tailwind-merge"

export function wrap(fn: (...args: unknown[]) => string): (className?: string) => string {
	return (className) => {
		return twMerge(fn(), className)
	}
}
