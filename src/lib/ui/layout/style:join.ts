import { tv } from 'tailwind-variants';

export const join = tv({
	base: 'join',
	slots: {
		item: 'join-item'
	},
	variants: {
		direction: {
			h: 'join-horizontal',
			v: 'join-horizontal'
		}
	}
});
