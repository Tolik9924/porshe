import styled from 'styled-components';

// assets
import carHeader from '../../assets/images/carHeader.jpeg';

export const Container = styled.div`
    max-width: 1800px;
    margin: 0 auto;
    background: #d3d6de;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-sizing: border-box;
    @media (max-width: 864px) {
        width: 100%;
    }
    display: flex;
    flex-direction: column;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 1000px) {
        flex-direction: column;
        margin-bottom: 40px;
    }
`;

export const Wrap = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const ImageContainer = styled.div`
    width: 1000px;
    height: 500px;
    background-image: url(${carHeader});
    background-size: cover;
    border-radius: 10px 0 0 10px;
    @media (max-width: 1000px) {
        width: 100%;
        border-radius: 0px;
    }
`;

export const Header = styled.header`
    font-size: 45px;
    font-weight: 600;
    color: #1a1a1a;
    margin-top: 50px;
`;

export const DescriptionContainer = styled.div`
    width: 700px;
    display: flex;
    justify-content: center;
    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const Description = styled.div`
    margin-top: 30px;
    box-sizing: border-box;
    font-size: 30px;
    color: #62666a;
`;
