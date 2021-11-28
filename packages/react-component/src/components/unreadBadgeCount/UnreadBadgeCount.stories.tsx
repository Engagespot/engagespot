import { Meta, Story } from '@storybook/react/types-6-0';

import { UnreadBadgeCount, UnreadBadgeCountProps } from './UnreadBadgeCount';

export default {
  title: 'Engagespot/UnreadBadgeCount',
  component: UnreadBadgeCount,
} as Meta;

const Template: Story<UnreadBadgeCountProps> = (args) => (
  <UnreadBadgeCount {...args} />
);

export const Default = Template.bind({});
Default.args = {
  count: 5,
};
