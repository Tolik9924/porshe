import React from 'react';
import { useTranslation, withTranslation, Trans } from "react-i18next";

// styles
import {
    InfoContainer,
    Wrap,
    ImageContainer,
    Header,
    DescriptionContainer,
    Description,
    Container,
} from './styled';

const Info = () => {

    const { t, i18n } = useTranslation();

    return (
        <Container>
            <InfoContainer>
                <ImageContainer></ImageContainer>
                <Wrap>
                    <Header>{t("info.infoHeader")}</Header>
                    <DescriptionContainer>
                        <Description>{t("info.infoMain")}</Description>
                    </DescriptionContainer>
                </Wrap>
            </InfoContainer>
        </Container>
    );
};

export default Info;
