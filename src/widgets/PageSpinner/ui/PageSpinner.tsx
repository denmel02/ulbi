import { classNames, Spinner } from 'shared';
import classes from './PageSpinner.module.scss';

interface PageSpinnerProps {
    className?: string;
}

export const PageSpinner = (props: PageSpinnerProps) => {
    const { className } = props;

    return (
        <div className={ classNames(classes.pageSpinner, className) }>
            <Spinner />
        </div>
    );
};