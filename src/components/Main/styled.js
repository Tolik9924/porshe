import styled from 'styled-components';

// assets
import infoBackground from '../../assets/images/infoBackground.jpeg';
import modelRow from '../../assets/images/modelRow.jpeg';

export const InfoContainer = styled.div`
    background-image: url(${infoBackground});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MoreInfoContainer = styled.div`
    width: 300px;
    height: 300px;
    margin: auto auto;
`;

export const MoreInfo = styled.button`
    background: none;
    color: #fff;
    border: 1px solid #fff;
    width: 280px;
    height: 80px;
    border-radius: 5px;
    font-size: 25px;
    cursor: pointer;
    transition: all .3s;
    border-radius: 10px;
    &:hover {
        background: #fff;
        color: inherit;
        transition: all .3s;
    }
`;

export const ModelsRow = styled.div`
    max-width: 1800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModelHeader = styled.header`
    display: flex;
    justify-content: center;
    font-size: 60px;
`;

export const Models = styled.div`
    display: flex;
    flex-direction: row;
    margin: 15px auto;
    max-width: 1800px;
    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Model = styled.div`
    width: 600px;
    height: 400px;
    background-image: url(${modelRow});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;

    @media (min-width: 1000px) and (max-width: 1200px) {
        margin-bottom: 10px;
      }

    @media (max-width: 1000px) {
        margin-bottom: 20px;
        width: 100%;
    }
`;

export const ModelContaier = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(0,0,0,0.4);
    height: 400px;
`;

export const InfoCar = styled.div`
    margin-top: 23px;
    margin-left: 23px;
`;

export const NameModel = styled.p`
    font-size: 38px;
    font-weight: 800;
`;

export const Price = styled.p`
    font-size: 30px;
    font-weight: 600;
`;

export const ConfigContainer = styled.div`
    margin-left: 33px;
    margin-bottom: 33px;
`;

export const Config = styled.button`
    width: 150px;
    height: 50px;
    background: #fff;
    cursor: pointer;
    border: none;
    font-size: 23px;
    transition: all .2s ease-out;
    &:hover {
        background: red;
        color: #fff;
        transition: all .2s ease-out;
    }
`;
