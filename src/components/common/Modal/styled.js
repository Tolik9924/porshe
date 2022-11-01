import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: ${props => props.active ? 'all' : 'none'};
    pointer-events: none;
    transition: 0.5s;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
  transform: scale(1);
  transition: 0.4s transform;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 47, 52, 0.7);
`;