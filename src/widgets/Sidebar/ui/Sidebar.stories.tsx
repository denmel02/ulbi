import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar as SidebarComponent } from './Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: SidebarComponent
} as ComponentMeta<typeof SidebarComponent>;

export const Sidebar: ComponentStory<typeof SidebarComponent> = () => <SidebarComponent />;
