import React from 'react';
import { useTranslation, withTranslation, Trans } from "react-i18next";

// styles
import {
    Common,
    Content,
    Container,
    Header,
    Info,
    Wrap,
} from './styled';

const Footer = () => {

    const { t, i18n } = useTranslation();

    return (
        <Container>
            <Common>
                <Content>
                    <Header>{t("footer.contacts")}</Header>
                    <Info>{t("footer.test-drive")}</Info>
                    <Info>{t("footer.feedback")}</Info>
                    <Info>{t("footer.vacancies")}</Info>
                    <Info>{t("footer.service-partner")}</Info>
                </Content>
                <Content>
                    <Header>{t("footer.service-partner")}</Header>
                    <Info>{t("footer.world-porsche")}</Info>
                    <Info>{t("footer.diplomatic-sales")}</Info>
                    <Info>{t("footer.world-porsche")}</Info>
                    <Info>FAQ</Info>
                </Content>
            </Common>
        </Container>
    );
};

export default Footer;
