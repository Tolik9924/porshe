import React from 'react';
import { Link } from 'react-router-dom';
import RightNav from './RightNav';
import {
    ContainerHeader,
    Container,
    Logo,
    NavLink,
} from './styled';

const Header = () => {
    return (
        <ContainerHeader>
            <Container>
                <Logo>
                    <NavLink to="/">Logo</NavLink>
                </Logo>
                <RightNav />
            </Container>
        </ContainerHeader>
    );
};

export default Header;
