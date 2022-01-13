import { Meta, Story } from '@storybook/react/types-6-0';
import { NotificationPanel, NotificationPanelProps } from './NotificationPanel';

export default {
  title: 'Engagespot/NotificationPanel',
  component: NotificationPanel,
} as Meta;

const Template: Story<NotificationPanelProps> = args => (
  <NotificationPanel {...args} />
);

const notifications = [
  {
    heading: `Acme Holidays`,
    description: 'Find things to do in your upcoming trip',
    time: '3 minutes ago',
    imageUrl:
      'https://images.unsplash.com/photo-1597910037177-4f1c411a3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    read: true,
    heading: 'Playstation 5 available',
    time: '1 hour ago',
    imageUrl:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    description:
      'Much awaited PS5 is available for order right now. Purchase now to get exclusive benefits',
  },
  {
    heading: `Acme Holidays`,
    description: 'Find things to do in your upcoming trip',
    time: '3 minutes ago',
    imageUrl:
      'https://images.unsplash.com/photo-1597910037177-4f1c411a3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    read: true,
    heading: 'Playstation 5 available',
    time: '1 hour ago',
    imageUrl:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    description:
      'Much awaited PS5 is available for order right now. Purchase now to get exclusive benefits',
  },
  {
    heading: `Acme Holidays`,
    description: 'Find things to do in your upcoming trip',
    time: '3 minutes ago',
    imageUrl:
      'https://images.unsplash.com/photo-1597910037177-4f1c411a3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    read: false,
    heading: 'Playstation 5 available',
    time: '1 hour ago',
    imageUrl:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    description:
      'Much awaited PS5 is available for order right now. Purchase now to get exclusive benefits',
  },
  {
    heading: `Acme Holidays`,
    description: 'Find things to do in your upcoming trip',
    time: '3 minutes ago',
    imageUrl:
      'https://images.unsplash.com/photo-1597910037177-4f1c411a3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    read: false,
    heading: 'Playstation 5 available',
    time: '1 hour ago',
    imageUrl:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    description:
      'Much awaited PS5 is available for order right now. Purchase now to get exclusive benefits',
  },
  {
    heading: `Acme Holidays`,
    description: 'Find things to do in your upcoming trip',
    time: '3 minutes ago',
    imageUrl:
      'https://images.unsplash.com/photo-1597910037177-4f1c411a3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    read: false,
    heading: 'Playstation 5 available',
    time: '1 hour ago',
    imageUrl:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    description:
      'Much awaited PS5 is available for order right now. Purchase now to get exclusive benefits',
  },
  {
    heading: `Acme Holidays`,
    description: 'Find things to do in your upcoming trip',
    time: '3 minutes ago',
    imageUrl:
      'https://images.unsplash.com/photo-1597910037177-4f1c411a3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    read: true,
    heading: 'Playstation 5 available',
    time: '1 hour ago',
    imageUrl:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    description:
      'Much awaited PS5 is available for order right now. Purchase now to get exclusive benefits',
  },
  {
    heading: `Acme Holidays`,
    description: 'Find things to do in your upcoming trip',
    time: '3 minutes ago',
    imageUrl:
      'https://images.unsplash.com/photo-1597910037177-4f1c411a3802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    read: true,
    heading: 'Playstation 5 available',
    time: '1 hour ago',
    imageUrl:
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    description:
      'Much awaited PS5 is available for order right now. Purchase now to get exclusive benefits',
  },
];

export const Primary = Template.bind({});
Primary.args = {
  notifications,
};

export const Empty = Template.bind({});
Empty.args = {
  notifications: [],
};
