import { useTranslation } from 'react-i18next';
import { RouterLink } from 'shared';
import classes from './Navbar.module.scss';

export const Navbar = () => {
    const { t } = useTranslation();

    return (
        <div className={ classes.navbar}>
            <div className={ classes.links }>
                <RouterLink to="/" variant="secondary">{ t('Main') }</RouterLink>
                <RouterLink to="/about" variant="secondary">{ t('About') }</RouterLink>
            </div>
        </div>
    );
};