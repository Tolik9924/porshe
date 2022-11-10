import React from 'react';

// components
import Configurate from './Configurate';
import { useParams } from 'react-router-dom';
import { cars } from '../../data/data';

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Car = () => {

    const { id } = useParams();

    const configureData = JSON.parse(JSON.stringify(cars));

    const result = configureData.find((item) => item.id === Number(id));

    return (
        <div>
            <Configurate
                colors={result.colors}
                name={result.name}
                energy={result.energy}
                price={result.price}
                wheels={result.wheels}
            />
        </div>
    );
}

export default Car;
