import styled from 'styled-components';

export const Container = styled.div`
    width: 1800px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-sizing: border-box;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Image = styled.img.attrs({
    width: 1000,
    height: 800,
})`
    object-fit: cover;
`;

export const ChangeConfig = styled.div`
    margin-left: 120px;
    display: flex;
    flex-direction: column;
    width: 100%;
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
