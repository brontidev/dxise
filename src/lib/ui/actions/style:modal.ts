import { tv, type VariantProps } from 'tailwind-variants';

export const modal = tv({
	base: 'modal',
	slots: {
		box: 'modal-box',
		action: 'modal-action',
		backdrop: 'modal-backdrop',
		/**
		 * @deprecated
		 * The use of this class is considered `legacy` in the daisyui documentation.
		 */
		toggle: 'modal-toggle'
	},
	variants: {
		align: {
			start: 'modal-start',
			end: 'modal-end'
		},
		placement: {
			top: 'modal-top',
			bottom: 'modal-bottom',
			left: 'modal-left',
			right: 'modal-right'
		},
		open: {
			true: 'modal-open'
		}
	}
});

export type Props = VariantProps<typeof modal>;
