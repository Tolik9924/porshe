import React from 'react';
import Close from '../../../../assets/icons/Close';

// components
import Modal from '../../Modal';
import {
    Container,
    CloseMenuContainer,
    CloseMenu,
    NavBar,
    ItemContainer,
    Ul,
    NavLink,
} from './styled';

const ModalHeader = ({
    active,
    setActive,
}) => {

    const changeHandler = () => {
        setActive(false);
    };

    return (
        <Modal active={active} setActive={setActive}>
            <Container>
                <CloseMenuContainer>
                    <CloseMenu onClick={changeHandler}>
                        <Close width="20" height="20" fill="#fff" />
                    </CloseMenu>
                </CloseMenuContainer>
                <NavBar>
                    <Ul>
                        <ItemContainer>
                            <NavLink to="/models">Моделі</NavLink>
                        </ItemContainer>
                        <ItemContainer>
                            <div>Автомобілі в наявності</div>
                        </ItemContainer>
                        <ItemContainer>
                            <div>Сервіс і аксесуари</div>
                        </ItemContainer>
                        <ItemContainer>
                            <div>Пропозиції</div>
                        </ItemContainer>
                        <ItemContainer>
                            <div>Події</div>
                        </ItemContainer>
                        <ItemContainer>
                            <div>Про порше</div>
                        </ItemContainer>
                    </Ul>
                </NavBar>
            </Container>
        </Modal>
    );
};

export default ModalHeader;
