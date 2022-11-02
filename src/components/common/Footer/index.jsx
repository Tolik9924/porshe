import React from 'react';

import {
    Common,
    Content,
    Container,
    Header,
    Info,
    Wrap,
} from './styled';

const Footer = () => {
    return (
        <Container>
            <Common>
                <Content>
                    <Header>Контакти</Header>
                    <Info>Tест-драйв</Info>
                    <Info>Зворотній звязок</Info>
                    <Info>Вакансії</Info>
                    <Info>Сервісне партнерство з Porsche</Info>
                </Content>
                <Content>
                    <Header>Світ Порше</Header>
                    <Info>Корпоративні продажі BMW</Info>
                    <Info>Diplomatic Sales</Info>
                    <Info>Світ Порше</Info>
                    <Info>FAQ</Info>
                </Content>
            </Common>
        </Container>
    );
};

export default Footer;
