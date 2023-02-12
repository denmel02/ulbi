import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../lib';
import classes from './Button.module.scss';

type ButtonVariant = 'clear';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, variant = 'clear', children, ...buttonProps } = props;

    return (
        <button
            className={ classNames(classes.button, classes[variant], className) }
            { ...buttonProps }
        >
            { children }
        </button>
    );
};