import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index: 1;
`;

export const CloseMenuContainer = styled.div`
    display: flex;
    justify-content: end;
`;

export const CloseMenu = styled.button`
    background: none;
    color: #fff;
    border: none;
`;

export const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Ul = styled.ul`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ItemContainer = styled.li`
    width: 300px;
    border-bottom: 0.5px solid #fff;
    margin-top: 10px;
    padding: 10px 10px;
    box-sizing: border-box;
    font-size: 25px;
    color: #fff;
`;

export const NavLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;
