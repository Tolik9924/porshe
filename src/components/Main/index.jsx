import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation, withTranslation, Trans } from "react-i18next";

// components
import Info from '../Info';

// data
import { cars } from '../../data/data';

// styles
import {
    InfoContainer,
    MoreInfoContainer,
    MoreInfo,
    ModelsRow,
    ModelHeader,
    Models,
    Model,
    ModelContaier,
    InfoCar,
    NameModel,
    Price,
    ConfigContainer,
    Config,
    TextConfig,
    InnerTextConfig,
} from './styled';
import ArrowRight from '../../assets/icons/ArrowRight';

export const Main = () => {

    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    const handleClick = (id) => {
        navigate(`/models/${id}`);
    }

    return (
        <div>
            <InfoContainer>
                <MoreInfoContainer>
                    <MoreInfo>{t("main.moreInfo")}</MoreInfo>
                </MoreInfoContainer>
            </InfoContainer>
            <Info />
            <div>
                <ModelHeader>{t("main.modelRow")}</ModelHeader>
                <Models>
                    {
                        cars.map((car) => {
                            return (
                                <Model key={car.id}>
                                    <ModelContaier>
                                        <InfoCar>
                                            <NameModel>{car.name}</NameModel>
                                            <Price>{t("main.orientedPrice")} {car.price}</Price>
                                        </InfoCar>
                                        <ConfigContainer>
                                            <Config onClick={() => handleClick(car.id)}>
                                                <TextConfig>
                                                    <ArrowRight width='10px' height='10px' />
                                                    <InnerTextConfig>
                                                        <span>{t("main.config")}</span>
                                                    </InnerTextConfig>
                                                </TextConfig>
                                            </Config>
                                        </ConfigContainer>
                                    </ModelContaier>
                                </Model>
                            );
                        })
                    }
                </Models>
            </div>
        </div>
    );
};

export default Main;
