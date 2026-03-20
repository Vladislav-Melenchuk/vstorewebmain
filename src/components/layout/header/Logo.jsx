import { Link } from 'react-router-dom'

import styled from 'styled-components'
import logo from '../../../assets/icons/general-icons/logo.svg'

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 36px;
  text-decoration: none;
`;

const LogoText  = styled.h1`
   margin: 0;
   color: var(--color-white);
   font-size: 24px;
`;

export const Logo = () => (
   <LogoWrapper to="/">
      <img src={logo} alt='VStore' />
      <LogoText>STORE</LogoText>
   </LogoWrapper>
);


