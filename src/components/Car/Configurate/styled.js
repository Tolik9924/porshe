import styled from 'styled-components';

// assets
import form from '../../../assets/images/form.webp';

export const Container = styled.div`
    width: 1800px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    @media (max-width: 1800px) {
        width: 100%;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 1800px) {
        flex-direction: column;
    }
`;

export const ImageContainer = styled.div`
    width: 2000px;
    height: 800px;
    background-image: url(${form});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 1800px) {
        width: 100%;
    }
`;

export const SliderContainer = styled.div`
    width: 800px;
    z-index: 2;
`;

export const SlickSlide = styled.div`
    img {
        margin: auto;
    } 
`;

export const ChangeConfig = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 1800px) {
        width: 100%;
        margin-left: 120px;
    }
`;

export const ConfigHeader = styled.header`
    font-size: 45px;
    font-weight: 600;
    color: #1a1a1a;
`;

export const NameCarContainer = styled.div`
    font-size: 30px;
    color: #707275;
    border-bottom: 0.5px solid #d8d9da;
`;

export const NameCar = styled.p``;

export const ItemsConfig = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: space-between;
`;

export const ItemPrice = styled.div`
    color: #3e4041;
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
`;

export const Color = styled.div`
    margin-left: 3px;
    margin-right: 3px;
    width: 100px;
    height: 100px;
    background: ${props => props.color};
    display: flex;
    justify-content: end;
    border-radius: 5px;
    border: 0.5px solid #bec0c1;
`;

export const Wheel = styled.div`
    background-image: url(${props => props.image});
    background-size: contain;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: end;
`;

export const PriceContainer = styled.div`
    margin-top: 50px;
    border-top: 0.5px solid #d8d9da;
    font-size: 35px;
    color: #21232c;
`;

export const ArrowRightContainer = styled.div`
    position: absolute;
    top: 280px;
    left: 738px;
    z-index: 1;
    &::before {
        content: '';
    }
    /* &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 5px;
    } */
`;

export const ArrowLeftContainer = styled.div`
    position: absolute;
    top: 280px;
    z-index: 1;
    left: 1px;
    &::before {
        content: '';
    }
`;
