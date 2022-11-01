import React from 'react';

import {
    Nav,
    Lists,
    Item,
    NavLink,
} from './styled';

const Desktop = () => {
    return (
        <Nav>
            <Lists>
                <Item><NavLink to="/models">Моделі</NavLink></Item>
                <Item>Автомобілі в наявності</Item>
                <Item>Сервіс і аксесуари</Item>
                <Item>Пропозиції</Item>
                <Item>Події</Item>
                <Item>Про порше</Item>
            </Lists>
        </Nav>
    );
};

export default Desktop;
