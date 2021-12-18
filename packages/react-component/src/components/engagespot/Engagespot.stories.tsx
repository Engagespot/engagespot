import { Story, Meta } from '@storybook/react/types-6-0';

import { Engagespot, EngagespotProps } from './Engagespot';

export default {
  title: 'Engagespot/Engagespot',
  component: Engagespot,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<EngagespotProps> = args => <Engagespot {...args} />;

export const Default = Template.bind({});
Default.args = {
  apiKey: 'shiynklpz18l3ktqyy6d9a',
  userId: 'anand',
};

export const EmptyNotifications = Template.bind({});
EmptyNotifications.args = {
  apiKey: 'sdf',
  userId: 'anand',
};
