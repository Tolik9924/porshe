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

    const options = i18n.options.locales.map((locale) => {
        return {value: locale, label: locale};
    });

    const customStyles = {
        control: styles => ({ 
            ...styles,
            border: 'none',
            boxShadow: 'none',
        }),
        option: (provided, state) => ({
            ...provided,
            borderBottom: 'none',
            color: state.isSelected ? '#fff' : '#000',
            backgroundColor: state.isSelected ? '#000' : '#fff',
            marginTop: '-4px',
            marginBottom: '-4px',
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
