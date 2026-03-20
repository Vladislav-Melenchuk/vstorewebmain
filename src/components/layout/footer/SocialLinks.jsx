import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SocialMediaContainer = styled.ul`
   display: flex;
   gap: 20px;
   width: fit-content;
   align-items: center;
   margin-bottom: 40px;
`;
   
export const SocialLinks = ({icons}) => (
   <SocialMediaContainer>
      {icons.map((icon) => (
         <li key={icon.alt}>
            <a href={icon.to}>
               <img src={icon.src} alt={icon.alt}/>
            </a>
         </li>
      ))}
   </SocialMediaContainer>
)  
