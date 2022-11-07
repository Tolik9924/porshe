import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// conponents
import RightNav from './RightNav';
import ModalHeader from './ModalHeader';

// assets
import logo from '../../../assets/images/logoPorsche.png';

// styles
import {
    ContainerHeader,
    Container,
    Logo,
    NavLink,
} from './styled';

const Header = () => {

    const [active, setActive] = useState(false);
    const [link, setLink] = useState('');
    const { pathname } = useLocation();

    useEffect(() => {
        if (link !== pathname) {
            setLink(pathname);
            setActive(false);
        }
    }, [pathname]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.matchMedia('(min-width: 864px)').matches) {
                setActive(false);
            }
        });
    }, []);

    return (
        <ContainerHeader>
            <Container>
                <Logo>
                    <NavLink to="/"><img src={logo} width="80" height="80" /></NavLink>
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
