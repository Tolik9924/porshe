import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

// components
import Checkbox from '../../common/Checkbox';

// hooks
import useGetPrice from '../../../hooks/useGetPrice';

// assets
import form from '../../../assets/images/form.webp';

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
    ChangeConfig,
    ConfigHeader,
    Container,
    Content,
    ImageContainer,
    SliderContainer,
    ImageSliderContainer,
    SlickSlide,
    ItemPrice,
    ItemsConfig,
    Color,
    NameCarContainer,
    NameCar,
    PriceContainer,
    Price,
    Wheel,
    ArrowRightContainer,
    ArrowLeftContainer,
} from './styled';
import Button from '../../common/Button';
import ArrowRight from '../../../assets/icons/ArrowRight';
import ArrowLeft from '../../../assets/icons/ArrowLeft';
import useGetColor from '../../../hooks/useGetColor';

const Arrow = ({ type, onClick }) => {
    let className = type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    return (
        <Button className={className} onClick={onClick}>
            {type === "next" ? <ArrowRight width='50' height='50' fill='#c7381f' /> : <ArrowLeft width='50' height='50' fill='#c7381f' />}
        </Button>
    );
}

const Configurate = ({
    colors,
    name,
    energy,
    price,
    wheels,
}) => {
    const defaultColorPrice = useGetPrice(colors);
    const defaultWheelPrice = useGetPrice(wheels);
    const defaultColorCar = useGetColor(colors);
    const [colorPrice, setColorPrice] = useState(0);
    const [wheelPrice, setWheelPrice] = useState(0);
    const [colorCar, setColorCar] = useState([]);

    const total = price + colorPrice + wheelPrice;

    useEffect(() => {
        setColorCar(defaultColorCar);
    }, [defaultColorCar]);

    useEffect(() => {
        setColorPrice(defaultColorPrice);
    }, [defaultColorPrice]);

    useEffect(() => {
        setWheelPrice(defaultWheelPrice);
    }, [defaultWheelPrice]);

    const handleChange = (name, arr, setState) => {
        for (let i = 0; i < arr.length; i++) {
            if (name === arr[i].name) {
                arr[i] = { ...arr[i], active: true }
                setState(arr[i].price);
                if(arr[i].images !== undefined) {
                    setColorCar(arr[i].images);
                }
            } else {
                arr[i] = { ...arr[i], active: false }
            }
        }
    };

    const settings = {
        dots: true,
        centerMode: false,
        autoplay: false,
        slidesToScroll: 1,
        slidesToScroll: 1,
        draggable: true,
        speed: 1000,
        nextArrow: <ArrowRightContainer><Arrow type='next' /></ArrowRightContainer>,
        prevArrow: <ArrowLeftContainer><Arrow type='prev' /></ArrowLeftContainer>,
        appendDots: dots => <ul>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom"></div>
        )
    };

    return (
        <Container>
            <Content>
                <SliderContainer>
                    <Slider {...settings}>
                        {
                            colorCar.map((item) => {
                                return(
                                    <SlickSlide key={item}>
                                        <img src={item} />
                                    </SlickSlide>
                                );
                            })
                        }
                    </Slider>
                </SliderContainer>
                <ChangeConfig>
                    <ConfigHeader>
                        configurate
                    </ConfigHeader>
                    <NameCarContainer>
                        <NameCar>{name}</NameCar>
                    </NameCarContainer>
                    <div>
                        <ItemPrice>{colorPrice}</ItemPrice>
                        <ItemsConfig>
                            {
                                colors.map(({ name, active }) => {
                                    return (
                                        <Color key={name} color={name}>
                                            <Checkbox checked={active} onChange={() => handleChange(name, colors, setColorPrice)} />
                                        </Color>
                                    );
                                })
                            }
                        </ItemsConfig>
                    </div>
                    <div>
                        <ItemPrice>{wheelPrice}</ItemPrice>
                        <ItemsConfig>
                            {
                                wheels.map(({ name, image, active }) => {
                                    return (
                                        <Wheel key={name} image={image}>
                                            <Checkbox checked={active} onChange={() => handleChange(name, wheels, setWheelPrice)} />
                                        </Wheel>
                                    );
                                })
                            }
                        </ItemsConfig>
                    </div>
                    <PriceContainer>
                        <Price>Price: {total}</Price>
                    </PriceContainer>
                </ChangeConfig>
            </Content>
        </Container>
    );
};

export default Configurate;
