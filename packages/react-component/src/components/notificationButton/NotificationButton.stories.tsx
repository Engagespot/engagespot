import { Meta, Story } from '@storybook/react/types-6-0';

import {
  NotificationButton,
  NotificationButtonProps,
} from './NotificationButton';

export default {
  title: 'Engagespot/NotificationButton',
  component: NotificationButton,
} as Meta;

const Template: Story<NotificationButtonProps> = args => (
  <NotificationButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Normal = Template.bind({});
Normal.args = {
  type: 'normal',
};

export const Floating = Template.bind({});
Floating.args = {
  type: 'floating',
};
