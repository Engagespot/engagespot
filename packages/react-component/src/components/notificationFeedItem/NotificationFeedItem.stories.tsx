import { Meta, Story } from '@storybook/react/types-6-0';
import {
  NotificationFeedItem,
  NotificationFeedItemProps,
} from './NotificationFeedItem';

export default {
  title: 'Engagespot/NotificationFeedItem',
  component: NotificationFeedItem,
} as Meta;

const Template: Story<NotificationFeedItemProps> = (args) => (
  <NotificationFeedItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading: `Acme Holidays`,
  description: 'Find things to do in your upcoming trip',
  time: '3 minutes ago',
  read: true,
  imageUrl:
    'https://images.unsplash.com/photo-1597910037177-4f1c411a3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
};

export const Unread = Template.bind({});
Unread.args = {
  read: false,
  heading: 'Playstation 5 available',
  time: '1 hour ago',
  imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
  description:
    'Much awaited PS5 is available for order right now. Purchase now to get exclusive benefits',
};
