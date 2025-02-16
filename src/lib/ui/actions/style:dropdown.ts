import { tv, type VariantProps } from 'tailwind-variants';

export const dropdown = tv({
	base: 'dropdown',
	slots: {
		content: 'dropdown-content'
	},
	variants: {
		align: {
			start: 'dropdown-start',
			center: 'dropdown-center',
			end: 'dropdown-end'
		},
		placement: {
			top: 'dropdown-top',
			bottom: 'dropdown-bottom',
			left: 'dropdown-left',
			right: 'dropdown-right'
		},
		open: {
			true: 'dropdown-open'
		},
		openOnHover: {
			true: 'dropdown-hover'
		}
	},
	defaultVariants: {
		align: 'start',
		placement: 'bottom'
	}
});

export type Props = VariantProps<typeof dropdown>;
