import { tv, type VariantProps } from 'tailwind-variants';

export const button = tv({
	base: 'btn',
	variants: {
		color: {
			neutral: 'btn-neutral',
			primary: 'btn-primary',
			secondary: 'btn-secondary',
			accent: 'btn-accent',
			info: 'btn-info',
			success: 'btn-success',
			warning: 'btn-warning',
			error: 'btn-error',
			default: ''
		},
		style: {
			outline: 'btn-outline',
			soft: 'btn-soft',
			ghost: 'btn-ghost',
			link: 'btn-link',
			default: ''
		},
		disabled: {
			true: 'btn-disabled'
		},
		active: {
			true: 'btn-active'
		},
		shape: {
			circle: 'btn-circle',
			square: 'btn-square',
			default: ''
		},
		mod: {
			wide: 'btn-wide',
			block: 'btn-block',
			default: ''
		},
		size: {
			xs: 'btn-xs',
			sm: 'btn-sm',
			default: '',
			md: 'btn-md',
			lg: 'btn-lg'
		}
	},
	defaultVariants: {
		active: false,
		disabled: false,
		color: 'primary',
		mod: 'default',
		shape: 'default',
		size: 'default',
		style: 'default'
	}
});

export type Props = VariantProps<typeof button>;
