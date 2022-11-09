import React from 'react';
import { useTranslation, withTranslation, Trans } from "react-i18next";

import {
    Nav,
    Lists,
    Item,
    NavLink,
} from './styled';

const Desktop = () => {

     const { t, i18n } = useTranslation();

    return (
        <Nav>
            <Lists>
                <Item><NavLink to="/models">{t("header.models")}</NavLink></Item>
                <Item>{t("header.availability")}</Item>
                <Item>{t("header.service")}</Item>
                <Item>{t("header.propositions")}</Item>
                <Item>{t("header.events")}</Item>
                <Item>{t("header.about")}</Item>
            </Lists>
        </Nav>
    );
};

export default Desktop;
