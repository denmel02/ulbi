import { ComponentStory, ComponentMeta } from '@storybook/react';
import AboutPageComponent from './AboutPage';

export default {
    title: 'pages/AboutPage',
    component: AboutPageComponent
} as ComponentMeta<typeof AboutPageComponent>;

export const AboutPage: ComponentStory<typeof AboutPageComponent> = () => <AboutPageComponent />;
