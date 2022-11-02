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
`;

export const ConfigHeader = styled.header`
    font-size: 45px;
    font-weight: 600;
    color: #1a1a1a;
`;

export const Colors = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
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
