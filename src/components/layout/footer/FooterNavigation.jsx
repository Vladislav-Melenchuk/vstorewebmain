import styled from 'styled-components'

const FooterNav = styled.ul`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 24px;

   a span {
   color: #ffffff;
   font-size: 16px;
   font-weight: 500;
}
`;

export const FooterNavigation = ({navList}) => (
   <FooterNav>
      {navList.map((item) => (
         <li key={item.title}>
            <a href={item.href}>
               <span>{item.title}</span>
            </a>
         </li>
      ))}                  
   </FooterNav>
)

