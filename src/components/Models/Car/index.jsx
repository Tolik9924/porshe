import React from 'react';

import model from '../../../assets/images/model.jpeg';

import { 
    Config, 
    Container, 
    Name, 
    Resource,
    Image 
} from './styled';

const Car = ({
    id,
    name,
    energy,
}) => {

    return(
        <Container>
            <Image src={model} />
            <Name>{name}</Name>
            <Resource>{energy}</Resource>
            <Config to={`/models/${id}`} >Configurate</Config>
        </Container>
    );
};

export default Car;
