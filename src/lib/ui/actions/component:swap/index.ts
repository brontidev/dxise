import { swap } from "../style:swap.js";

export type SwapContext = Record<
	keyof Omit<ReturnType<typeof swap>, 'base' | 'toggle'>,
	(className?: string) => string
>;

export const contextSymbol = Symbol("swap context");

export { swap }