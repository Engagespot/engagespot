import { Story, Meta } from '@storybook/react/types-6-0';

import { Engagespot, EngagespotProps } from './Engagespot';

export default {
  title: 'Engagespot/Engagespot',
  component: Engagespot,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<EngagespotProps> = (args) => <Engagespot {...args} />;

export const Default = Template.bind({});
Default.args = {
  apiKey: '33o5wp1l2fettiyc73ddcc',
  userId: 'anandsmac@localhost',
};
