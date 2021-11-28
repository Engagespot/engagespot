import { Meta, Story } from '@storybook/react/types-6-0';
import {
  NotificationHeader,
  NotificationHeaderProps,
} from './NotificationHeader';

export default {
  title: 'Engagespot/NotificationHeader',
  component: NotificationHeader,
} as Meta;

const Template: Story<NotificationHeaderProps> = args => (
  <NotificationHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Notifications',
};
