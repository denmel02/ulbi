import { useTranslation } from 'react-i18next';
import classes from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();

    return (
        <div className={ classes.notFound }>
            { t('Not found') }
        </div>
    );
};