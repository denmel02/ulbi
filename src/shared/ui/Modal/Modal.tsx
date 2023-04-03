import { FC, useCallback, useEffect, useRef, useState, MouseEvent } from 'react';
import { classNames } from '../../lib/classNames';
import { Portal } from '../Portal';
import classes from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

type Timeout = ReturnType<typeof setTimeout>;

const CLOSING_INTERVAL = 300;

export const Modal: FC<ModalProps> = (props) => {
    const { className, isOpen, onClose, children } = props;
    const [isClosing, setClosing] = useState(false);
    const timeoutRef = useRef<Timeout>();
    const closeClick = useCallback(() => {
        if (onClose) {
            setClosing(true);
            timeoutRef.current = setTimeout(() => {
                setClosing(false);
                onClose();
            }, CLOSING_INTERVAL);
        }
    }, [onClose]);
    const contentClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }, []);
    const escapeClick = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeClick();
        }
    }, [closeClick]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', escapeClick);
        }

        return () => {
            clearTimeout(timeoutRef.current);
            window.removeEventListener('keydown', escapeClick);
        };
    }, [escapeClick, isOpen]);

    return (
        <Portal>
            <div
                className={ classNames(classes.modal, isOpen && classes.open, isClosing && classes.closing, className) }
            >
                <div className={ classes.overlay } onClick={ closeClick }>
                    <div className={ classes.content } onClick={ contentClick }>
                        { children }
                    </div>
                </div>
            </div>
        </Portal>
    );
};