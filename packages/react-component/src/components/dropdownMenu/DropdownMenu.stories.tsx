import { Meta, Story } from '@storybook/react/types-6-0';

import {
  DropdownMenu,
  DropdownMenuProps,
} from './DropdownMenu';

export default {
  title: 'Engagespot/DropdownMenu',
  component: DropdownMenu,
} as Meta;

const Template: Story<DropdownMenuProps> = (args) => (
  <DropdownMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {};