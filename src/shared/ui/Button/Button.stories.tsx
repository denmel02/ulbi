import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Text'
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear_Default = Template.bind({});

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined'
};
