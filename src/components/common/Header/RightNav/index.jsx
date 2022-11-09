import React, { useState } from 'react';
import { useTranslation, withTranslation, Trans } from "react-i18next";
import Select from 'react-select';

// components
import Burger from './Burger';
import Desktop from './Desktop';

// styles
import {
    Container,
    ChangeLanguage,
} from './styled';

const RightNav = ({
    active,
    setActive,
}) => {

    const { t, i18n } = useTranslation();

    const handleChange = (value) => {
        i18n.changeLanguage(value.value);
    };

    const options = [
        { value: 'en', label: 'en' },
        { value: 'ukr', label: 'ukr' },
    ];

    const customStyles = {
        control: styles => ({ 
            ...styles,
            border: 'none',
            boxShadow: 'none',
        }),
    };

    return (
        <Container>
            <Select
                options={options}
                onChange={(value) => handleChange(value)}
                defaultValue={{ value: 'en', label: 'en' }}
                styles={customStyles}
            />
            <Desktop />
            <Burger
                active={active}
                setActive={setActive}
            />
        </Container>
    );
};

export default RightNav;
