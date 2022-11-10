import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    background: #dadad7;
    display: flex;
    justify-content: center;
    color: #fff;
`;

export const Common = styled.div`
    width: 900px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 30px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 1000px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`;

export const Header = styled.header`
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    color: #191a1a;
`;

export const Info = styled.span`
    margin-top: 5px;
    margin-bottom: 5px;
    color: #4b4d4e;
    @media (max-width: 1000px) {
        font-size: 10px;
    }
`;
