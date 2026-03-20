import styled from 'styled-components'
import Button from '../../ui/buttons/button/Button.jsx'
import { NavLink } from 'react-router-dom'

const ActionsWrapper = styled.div`
   width: 400px;
   display: flex;
   align-items: center;

   ul {
      display: flex;
      align-items: center;
      gap: 18px;
      margin-right: 18px;
   }  
`;

export const HeaderActions = ({ actionIcons, onUserClick, onSignIn, onLogout, isAuth }) => (
   <ActionsWrapper>
      <ul>
         {actionIcons.map((icon) => (
            <li key={icon.alt}>
               {icon.alt === 'user-icon' ? (
                  <img src={icon.src} 
                       alt={icon.alt} 
                       onClick={onUserClick} />
               ) : (
                  <NavLink to={icon.to}>
                     <img src={icon.src} alt={icon.alt} />
                  </NavLink>
               )}
            </li>
         ))}
      </ul>

      <Button
         title={isAuth ? 'Sign out' : 'Sign in'}
         onClick={isAuth ?  onLogout : onSignIn}
         variant='secondary' size='medium'
      />

      <Button title={'Download'} variant='primary' size='medium' />
   </ActionsWrapper>
);