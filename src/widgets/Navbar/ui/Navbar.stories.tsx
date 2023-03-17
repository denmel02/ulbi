import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar as NavbarComponent } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: NavbarComponent
} as ComponentMeta<typeof NavbarComponent>;

export const Navbar: ComponentStory<typeof NavbarComponent> = () => <NavbarComponent />;
