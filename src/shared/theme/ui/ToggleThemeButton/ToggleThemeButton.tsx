import ThemeIcon from '../../../assets/svg/theme.svg';
import { classNames } from '../../../lib';
import { Button } from '../../../ui';
import { useTheme } from '../../lib';
import classes from './ToggleThemeButton.module.scss';

interface ToggleThemeButtonProps {
  className?: string;
}

export const ToggleThemeButton = (props: ToggleThemeButtonProps) => {
    const { className } = props;
    const { toggleTheme } = useTheme();

    return (
        <Button className={ classNames(classes.toggleTheme, className)} onClick={ toggleTheme }>
            <ThemeIcon />
        </Button>
    );
};