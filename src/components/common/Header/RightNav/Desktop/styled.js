import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Nav = styled.nav``;

export const Lists = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    list-style-type: none;
    @media screen and (max-width: 864px) {
      display: none;
    }
`;

export const Item = styled.li`
    cursor: pointer;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;
