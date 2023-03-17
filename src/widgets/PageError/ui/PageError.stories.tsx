import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageError as PageErrorComponent } from './PageError';

export default {
    title: 'widgets/PageError',
    component: PageErrorComponent
} as ComponentMeta<typeof PageErrorComponent>;

export const PageError: ComponentStory<typeof PageErrorComponent> = () => <PageErrorComponent />;
