import React from 'react';

// components
import Info from './Info';
import Configurate from './Configurate';
import { useParams } from 'react-router-dom';
import { cars } from '../../data/data';

const Car = () => {

    const {id } = useParams();

    const configureData = JSON.parse(JSON.stringify(cars));

    const result = configureData.filter((item) => {
        return item.id === Number(id);
    });

    return (
        <div>
            <Info />
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
