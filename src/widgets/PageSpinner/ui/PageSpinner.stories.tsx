import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageSpinner as PageSpinnerComponent } from './PageSpinner';

export default {
    title: 'widgets/PageSpinner',
    component: PageSpinnerComponent
} as ComponentMeta<typeof PageSpinnerComponent>;

export const PageSpinner: ComponentStory<typeof PageSpinnerComponent> = () => <PageSpinnerComponent />;
