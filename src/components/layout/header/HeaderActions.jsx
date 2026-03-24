import styled from 'styled-components'
import Button from '../../ui/buttons/button/Button.jsx'
import { NavLink } from 'react-router-dom'

const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  ul {
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 16px;
   margin: 0;
   padding: 0;
   list-style: none;
  }

  img {
   width: 20px;
   height: 20px;
   cursor: pointer;
   transition: 0.2s ease;
   opacity: 0.85;
  }

  img:hover {
   transform: scale(1.1);
   opacity: 1;
  }
`

export const HeaderActions = ({
  actionIcons,
  onUserClick,
  onSignIn,
  onLogout,
  isAuth,
  onOpenLang
}) => {

  const handleClick = (icon) => {
    if (icon.type === 'user') {
      onUserClick()
    }

    if (icon.type === 'modal') {
      onOpenLang()
    }
  }

  return (
    <ActionsWrapper>
      <ul>
        {actionIcons.map((icon) => (
          <li key={icon.alt}>

            {icon.type === 'modal' ? (
              <img
               src={icon.src}
               alt={icon.alt}
               onClick={() => handleClick(icon)}
              />
            ) : icon.type === 'user' ? (
              <img
                src={icon.src}
                alt={icon.alt}
                onClick={() => handleClick(icon)}
              />
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
        onClick={isAuth ? onLogout : onSignIn}
        variant="secondary"
        size="medium"
      />

      <Button
        title="Download"
        variant="primary"
        size="medium"
      />
    </ActionsWrapper>
  )
}