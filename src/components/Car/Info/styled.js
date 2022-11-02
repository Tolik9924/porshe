import styled from 'styled-components';

export const Container = styled.div`
    width: 1800px;
    height: 800px;
    margin: 0 auto;
    background: #d3d6de;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-sizing: border-box;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Wrap = styled.div`
    margin-top: 180px;
    width: 800px;
    display: flex;
    flex-direction: column;
    margin-left: 40px;
`;

export const Image = styled.img.attrs({
    width: 1000,
    height: 800,
})`
    object-fit: cover;
    border-radius: 5px 0px 0px 5px;
`;

export const Header = styled.header`
    font-size: 45px;
    font-weight: 600;
    color: #1a1a1a;
    margin-top: 50px;
`;

export const Description = styled.div`
    margin-top: 30px;
    box-sizing: border-box;
    font-size: 30px;
    color: #62666a;
`;
