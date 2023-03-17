import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner as SpinnerComponent } from './Spinner';

export default {
    title: 'shared/Spinner',
    component: SpinnerComponent
} as ComponentMeta<typeof SpinnerComponent>;

export const Spinner: ComponentStory<typeof SpinnerComponent> = () => <SpinnerComponent />;
