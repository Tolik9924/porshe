import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ChangeLanguage = styled.button`
    border: none;
    background: none;
    color: #000;
    font-size: 20px;
    cursor: pointer;
    transition: all .3s;
    &:hover {
        background: #000;
        color: #fff;
        transition: all .3s;
    }
`;
