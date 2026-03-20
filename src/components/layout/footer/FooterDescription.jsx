import styled from 'styled-components'
import logoIcon from '../../../assets/icons/general-icons/logo-big.svg'

const FooterDescr = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 42px;

   p {
      color: var(--color-white);
      font-size: 14px;
      font-weight: 500;
      flex: 1 1 auto;
      max-width: 600px;
      margin: 0;
   }

   img {
      flex: 0 0 auto;
   }
`;

export const FooterDescription = () => (
   <FooterDescr>
      <p>
         © 2025 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the US and other countries.
         VAT included in all prices where applicable
      </p>
      <img src={logoIcon} />
   </FooterDescr> 
)