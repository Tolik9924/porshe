import React from 'react';

import model from '../../../assets/images/model.jpeg';

import { 
    Config, 
    Container, 
    Name, 
    Resource,
    Image 
} from './styled';

const Car = () => {
    return(
        <Container>
            <Image src={model} />
            <Name>Porsche</Name>
            <Resource>Electro</Resource>
            <Config>Configurate</Config>
        </Container>
    );
};

export default Car;
