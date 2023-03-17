import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RouterLink } from './RouterLink';

export default {
    title: 'shared/RouterLink',
    component: RouterLink,
    args: {
        to: '',
        children: 'Text'
    }
} as ComponentMeta<typeof RouterLink>;

const Template: ComponentStory<typeof RouterLink> = (args) => <RouterLink {...args} />;

export const Primary_Default = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary'
};
