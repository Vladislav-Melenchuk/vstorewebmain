import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavigationBox = styled.nav`
  width: 230px;
  margin-right: 42px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  li a {
      text-decoration: none;
      color: var(--color-white);
      font-size: 16px;
   }
`;

export const HeaderNavigation = ({links}) => (
   <NavigationBox>
      <NavList>
      {links.map((linkItem, index) => (
         <li key={index}>
            <NavLink to={linkItem.path}>{linkItem.text}</NavLink>
         </li>
      ))}
      </NavList>
   </NavigationBox>
);