import React from 'react';
import { useNavigate } from 'react-router-dom';

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
} from './styled';

export const Main = () => {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/models/${id}`);
    }

    return (
        <div>
            <InfoContainer>
                <MoreInfoContainer>
                    <MoreInfo>More Info</MoreInfo>
                </MoreInfoContainer>
            </InfoContainer>
            <Info />
            <div>
                <ModelHeader>Model Row</ModelHeader>
                <Models>
                    {
                        cars.map((car) => {
                            return (
                                <Model key={car.id}>
                                    <ModelContaier>
                                        <InfoCar>
                                            <NameModel>{car.name}</NameModel>
                                            <Price>Орієнтована вартість від {car.price}</Price>
                                        </InfoCar>
                                        <ConfigContainer>
                                            <Config onClick={() => handleClick(car.id)}>config</Config>
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
