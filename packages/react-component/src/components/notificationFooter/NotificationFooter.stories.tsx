import { Meta, Story } from '@storybook/react/types-6-0';
import {
  NotificationFooter,
  NotificationFooterProps,
} from './NotificationFooter';

export default {
  title: 'Engagespot/NotificationFooter',
  component: NotificationFooter,
} as Meta;

const Template: Story<NotificationFooterProps> = (args) => (
  <NotificationFooter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Powered by Engagespot',
};
