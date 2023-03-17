import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LanguageButton as LanguageButtonComponent } from './LanguageButton';

export default {
    title: 'widgets/LanguageButton',
    component: LanguageButtonComponent
} as ComponentMeta<typeof LanguageButtonComponent>;

export const LanguageButton: ComponentStory<typeof LanguageButtonComponent> = () => <LanguageButtonComponent />;
