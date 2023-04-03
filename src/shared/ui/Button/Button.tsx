import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../lib';
import classes from './Button.module.scss';

type ButtonVariant = 'clear' | 'outlined' | 'background';

type ButtonSize = 'sizeM' | 'sizeL' | 'sizeXL';

type ButtonColor = 'normal' | 'inverted';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  isSquare?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, variant = 'clear', size = 'sizeM', color = 'normal', isSquare, children, ...buttonProps
    } = props;

    return (
        <button
            className={
                classNames(classes.button, classes[variant], classes[size], classes[color], isSquare && classes.square, className)
            }
            { ...buttonProps }
        >
            { children }
        </button>
    );
};