/* eslint-disable i18next/no-literal-string */
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal } from 'shared';
import classes from './Navbar.module.scss';

export const Navbar = () => {
    const { t } = useTranslation();
    const [isLoginOpen, setLoginOpen] = useState(false);
    const toggleLoginOpen = useCallback(() => {
        setLoginOpen((isPrevLoginOpen) => !isPrevLoginOpen);
    }, []);

    return (
        <div className={ classes.navbar }>
            <Button color="inverted" onClick={ toggleLoginOpen }>
                { t('Login') }
            </Button>
            <Modal isOpen={ isLoginOpen } onClose={ toggleLoginOpen }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt quia aut, ullam corrupti modi tempora voluptatibus repudiandae, nostrum fugiat eius explicabo repellendus sapiente possimus aliquam necessitatibus! Explicabo, natus facilis!
            </Modal>
        </div>
    );
};