import Dropdown from './Dropdown.svelte';
import DropdownAction from './DropdownAction.svelte';
import DropdownPortal from './DropdownPortal.svelte';
import { dropdown } from '../style:dropdown.js';

export type DropdownContext = Record<
	keyof Omit<ReturnType<typeof dropdown>, 'base'>,
	(className: string) => string
>;

export {
	Dropdown as Root,
	DropdownAction as Action,
	DropdownPortal as Portal,
	Dropdown,
	DropdownAction,
	DropdownPortal
};
