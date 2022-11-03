import React, { useEffect, useState } from 'react';

// components
import Checkbox from '../../common/Checkbox';

// hooks
import useGetPrice from '../../../hooks/useGetPrice';

// assets
import form from '../../../assets/images/form.webp';

// styles
import {
    ChangeConfig,
    ConfigHeader,
    Container,
    Content,
    Image,
    ItemsConfig,
    Color,
    NameCarContainer,
    PriceContainer,
    Wheel,
} from './styled';

const Configurate = ({
    colors,
    name,
    energy,
    price,
    wheels,
}) => {

    const defaultColorPrice = useGetPrice(colors);
    const defaultWheelPrice = useGetPrice(wheels);
    const [colorPrice, setColorPrice] = useState(0); 
    const [wheelPrice, setWheelPrice] = useState(0);

    const total = price + colorPrice + wheelPrice;

    useEffect(() => {
        setColorPrice(defaultColorPrice);
    }, [defaultColorPrice]);

    useEffect(() => {
        setWheelPrice(defaultWheelPrice);
    }, [defaultWheelPrice]);

    const handleChange = (name, arr, setState) => {
        for (let i = 0; i < arr.length; i++) {
            if(name === arr[i].name) {
                arr[i] = {...arr[i], active: true}
                setState(arr[i].price);
            } else {
                arr[i] = {...arr[i], active: false}
            }
        }
    };

    return (
        <Container>
            <Content>
                <div>
                    <Image src={form} width='100' height='100' />
                </div>
                <ChangeConfig>
                    <ConfigHeader>
                        configurate
                    </ConfigHeader>
                    <NameCarContainer>
                        <p>{name}</p>
                    </NameCarContainer>
                    <ItemsConfig>
                        {
                            colors.map(({name, active}) => {
                                return (
                                    <Color key={name} color={name}>
                                        <Checkbox checked={active} onChange={() => handleChange(name, colors, setColorPrice)} />
                                    </Color>
                                );
                            })
                        }
                    </ItemsConfig>
                    <ItemsConfig>
                        {
                            wheels.map(({name, image, active}) => {
                                return(
                                    <Wheel key={name} image={image}>
                                        <Checkbox checked={active} onChange={() => handleChange(name, wheels, setWheelPrice)} />
                                    </Wheel>
                                );
                            })
                        }
                    </ItemsConfig>
                    <PriceContainer>
                        <p>Price: {total}</p>
                    </PriceContainer>
                </ChangeConfig>
            </Content>
        </Container>
    );
};

export default Configurate;
