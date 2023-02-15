import { useTranslation } from 'react-i18next';
import { Button, classNames } from 'shared';
import classes from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = (props: PageErrorProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const tryAgain = () => window.location.reload();

    return (
        <div className={ classNames(classes.error, className) }>
            { t('Something went wrong') }
            <Button onClick={ tryAgain }>
                { t('Try again') }
            </Button>
        </div>
    );
};