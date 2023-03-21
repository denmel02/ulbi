import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../lib';
import classes from './Button.module.scss';

type ButtonVariant = 'clear' | 'outlined' | 'background' | 'backgroundInverted';

type ButtonSize = 'sizeM' | 'sizeL' | 'sizeXL';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isSquare?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, variant = 'clear', size = 'sizeM', isSquare, children, ...buttonProps } = props;

    return (
        <button
            className={
                classNames(classes.button, classes[variant], classes[size], isSquare && classes.square, className)
            }
            { ...buttonProps }
        >
            { children }
        </button>
    );
};