import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotFoundPage as NotFoundPageComponent} from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPageComponent
} as ComponentMeta<typeof NotFoundPageComponent>;

export const NotFoundPage: ComponentStory<typeof NotFoundPageComponent> = () => <NotFoundPageComponent />;
