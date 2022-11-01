import React from 'react';

import { Container, Content } from './styled';

const Modal = ({
    active,
    setActive,
    children,
}) => {
    <Container active={active} onClick={() => setActive(false)}>
        <Content active={active} onClick={e => e.stopPropagation()}>
            {children}
        </Content>
    </Container>
};

export default Modal;
