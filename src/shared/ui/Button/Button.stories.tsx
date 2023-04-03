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

export const Background = Template.bind({});
Background.args = {
    variant: 'background'
};

export const BackgroundSquared = Template.bind({});
BackgroundSquared.args = {
    variant: 'background',
    children: '=',
    isSquare: true
};

export const SizeM_Default = Template.bind({});

export const SizeL = Template.bind({});
SizeL.args = {
    size: 'sizeL'
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    size: 'sizeXL'
};

export const Inverted = Template.bind({});
Inverted.args = {
    color: 'inverted'
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    variant: 'background',
    color: 'inverted'
};
