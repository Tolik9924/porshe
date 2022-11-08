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
    width: 1000px;
    z-index: 0;

    .ft-slick__dots--custom {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }

    .slick-list {
        overflow: ${props => (props.overflow ? "visible" : "hidden")};
    }

    .slick-dots {
        position: absolute;
        bottom: 50px;
    
        display: block;
    
        width: 100%;
        padding: 0;
        margin: 0;
    
        list-style: none;
    
        text-align: center;
      }

      .slick-dots li {
        width: 14px;
        margin: 0 2px;
        transition: width 0.3s ease-in-out;
        cursor: pointer;
      }

      .slick-dots .slick-active .ft-slick__dots--custom {
        background: #c7381f;
      }

      @media (max-width: 1200px) {
        width: 100%;
      }

      @media (min-width: 1200px) and (max-width: 1600px) {
        margin: 0 auto;
      }
`;

export const SlickSlide = styled.div`
    img {
        width: 1000px;
        height: 600px;
        margin: auto;
        @media (max-width: 1200px) {
            width: 100%;
            height: 30%;
        }
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
    @media (max-width: 1800px) {
        margin-left: 50px;
    }
`;

export const NameCarContainer = styled.div`
    font-size: 30px;
    color: #707275;
    border-bottom: 0.5px solid #d8d9da;
`;

export const NameCar = styled.p`
    @media (max-width: 1800px) {
        margin-left: 50px;
    }
`;

export const ItemsConfig = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: space-between;
    @media (max-width: 1800px) {
        margin-left: 50px;
    }
`;

export const ItemPrice = styled.div`
    color: #3e4041;
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    @media (max-width: 1800px) {
        margin-left: 50px;
    }
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

export const Price = styled.p`
    @media (max-width: 1800px) {
        margin-left: 50px;
    }
`;

export const ArrowRightContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 935px;
    z-index: 1;
    &::before {
        content: '';
    }
    @media (max-width: 1200px) {
        left: 85%;
    }
`;

export const ArrowLeftContainer = styled.div`
    position: absolute;
    top: 50%;
    z-index: 1;
    left: 1px;
    &::before {
        content: '';
    }
`;
