import styled from 'styled-components';

import infoBackground from '../../assets/images/infoBackground.jpeg';

export const InfoContainer = styled.div`
    background-image: url(${infoBackground});
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const MoreInfo = styled.button`
    background: none;
    color: #fff;
    border: 1px solid #fff;
    width: 280px;
    height: 80px;ß
    border-radius: 5px;
    font-size: 25px;
    cursor: pointer;
    margin-top: 210px;
    margin-left: 250px;
    transition: all .3s;
    border-radius: 10px;
    &:hover {
        background: #fff;
        color: inherit;
        transition: all .3s;
    }
`;
