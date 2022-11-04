import React, { useState } from 'react';
import ModalHeader from './ModalHeader';

// conponents
import RightNav from './RightNav';

// assets
import logo from '../../../assets/images/logo.png';

// styles
import {
    ContainerHeader,
    Container,
    Logo,
    NavLink,
} from './styled';

const Header = () => {

    const [active, setActive] = useState(false);

    return (
        <ContainerHeader>
            <Container>
                <Logo>
                    <NavLink to="/">logo</NavLink>
                </Logo>
                <RightNav 
                    active={active} 
                    setActive={setActive} 
                />
            </Container>
            <ModalHeader 
                active={active}
                setActive={setActive}  
            />
        </ContainerHeader>
    );
};

export default Header;
