import React, { useState } from 'react';

// components
import Burger from './Burger';
import Desktop from './Desktop';

const RightNav = ({active, setActive}) => {
    return (
        <>
            <Desktop />
            <Burger
                active={active} 
                setActive={setActive} 
            />
        </>
    );
};

export default RightNav;
