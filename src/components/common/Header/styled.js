import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerHeader = styled.header`
    width: calc(100% - 40px);
    padding: 0 20px;
    background: #34568b;
    color: #fff;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 68px;
    max-width: 1600px;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    font-size: 20px;
`;

export const Logo = styled.div``;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;
