import React from 'react';

// components
import Configurate from './Configurate';
import { useParams } from 'react-router-dom';
import { cars } from '../../data/data';

// assets
import form from '../../assets/images/form.webp';

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Car = () => {

    const { id } = useParams();

    const configureData = JSON.parse(JSON.stringify(cars));

    const result = configureData.filter((item) => {
        return item.id === Number(id);
    });

    return (
        <div>
            <Configurate
                colors={result[0].colors}
                name={result[0].name}
                energy={result[0].energy}
                price={result[0].price}
                wheels={result[0].wheels}
            />
        </div>
    );
}

export default Car;
