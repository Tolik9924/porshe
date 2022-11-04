import React from 'react';

import BurgerIcons from '../../../../../assets/icons/Burger';
import { BurgerButton } from './styled';

const Burger = ({active, setActive}) => {

    const changeHandler = () => {
        setActive(!active);
    };

    return(
        <BurgerButton onClick={changeHandler}>
            <BurgerIcons width="40px" height="40px" />
        </BurgerButton>
    );
};

export default Burger;
