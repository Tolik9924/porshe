import React from 'react';

// components
import Car from './Car';

// data
import { cars } from '../../data/data'

// styles
import { Container } from './styled';

const Models = () => {

    return (
        <Container>
            {
                cars.map(({ id, name, energy}) => {
                    return <Car
                        key={id}
                        id={id}
                        name={name}
                        energy={energy}
                    />
                })
            }
        </Container>
    );
};

export default Models;
