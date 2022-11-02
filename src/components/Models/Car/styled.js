import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 400px;
    height: 350px;
    border: 0.5px solid #f2f3f3;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    margin-right: 30px;
    margin-left: 30px;
`;

export const Image = styled.img`
    width: 80px
    height: 40px;
`;

export const Name = styled.p`
    color: #7d7f82;
`;

export const Resource = styled.p`
    color: #38312e;
`;

export const Config = styled(Link)`
    text-decoration: none;
    color: #34568b;
`;
