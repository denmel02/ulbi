import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPageComponent from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPageComponent
} as ComponentMeta<typeof MainPageComponent>;

export const MainPage: ComponentStory<typeof MainPageComponent> = () => <MainPageComponent />;
