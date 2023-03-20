import { useEffect, useState } from 'react';
import { classNames, ToggleThemeButton } from 'shared';
import { LanguageButton } from '../../LanguageButton';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
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
            <div className={ classes.testActions }>
                <button data-testid="sidebar-toggle" onClick={ onClick }>Toggle sidebar</button>
                <button onClick={ onClickError }>Error</button>
            </div>
            <div className={ classes.switchers }>
                <ToggleThemeButton />
                <LanguageButton className={ classes.language }/>
            </div>
        </div>
    );
};