import { RoutePath } from 'app/router/model';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, classNames, ToggleThemeButton, RouterLink } from 'shared';
import MainIcon from 'shared/assets/svg/main.svg';
import AboutIcon from 'shared/assets/svg/about.svg';
import { LanguageButton } from '../../LanguageButton';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isCollapsed, setCollapsed] = useState(false);
    const onClick = () => setCollapsed((prevIsCollapsed) => !prevIsCollapsed);

    // TODO: Удалить после теста ErrorBoundary
    const [hasError, setError] = useState(false);
    const onClickError = () => setError(true);

    useEffect(() => {
        if (hasError) {
            throw new Error();
        }
    });
    //

    return (
        <div
            data-testid="sidebar"
            className={ classNames(classes.sidebar, isCollapsed && classes.collapsed, className) }
        >
            <Button
                data-testid="sidebar-toggle"
                className={ classes.collapsedButton }
                onClick={ onClick }
                variant="background"
                color="inverted"
                size="sizeXL"
                isSquare
            >
                { isCollapsed ? '>' : '<' }
            </Button>
            <div className={ classes.links }>
                <RouterLink
                    className={ classes.link }
                    to={ RoutePath.main }
                    variant="secondary"
                >
                    <MainIcon width={ 24 } height={ 24 } />
                    <span className={ classes.linkTitle }>{ t('Main') }</span>
                </RouterLink>
                <RouterLink
                    className={ classes.link }
                    to={ RoutePath.about }
                    variant="secondary"
                >
                    <AboutIcon width={ 24 } height={ 24 } />
                    <span className={ classes.linkTitle }>{ t('About') }</span>
                </RouterLink>
            </div>
            <div className={ classes.testActions }>
                <button onClick={ onClickError }>{ t('Error') }</button>
            </div>
            <div className={ classes.switchers }>
                <ToggleThemeButton />
                <LanguageButton
                    className={ classes.language }
                    isShort={ isCollapsed }
                />
            </div>
        </div>
    );
};