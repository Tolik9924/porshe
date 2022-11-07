import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 70px;
    @media (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
    }
`;
