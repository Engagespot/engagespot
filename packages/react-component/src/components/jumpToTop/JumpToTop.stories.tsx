import { Meta, Story } from '@storybook/react/types-6-0';

import {
  JumpToTop,
  JumpToTopProps,
} from './JumpToTop';

export default {
  title: 'Engagespot/JumpToTop',
  component: JumpToTop,
} as Meta;

const Template: Story<JumpToTopProps> = (args) => (
  <JumpToTop {...args} />
);

export const Default = Template.bind({});
Default.args = {};