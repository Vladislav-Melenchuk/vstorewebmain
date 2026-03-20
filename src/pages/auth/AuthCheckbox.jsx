import styled from 'styled-components'

const Checkbox = styled.div`
   display: flex;
   align-items: flex-start;
   margin-bottom: 52px;

   input[type='checkbox'] {
      width: 26px;
      height: 26px;
      appearance: none;
      background: var(--color-white);
      padding: 8px 6px;
      cursor: pointer;
      border: 1px solid #fff;
      position: relative;
      border-radius: 4px;
   }

   input[type="checkbox"]:checked::after {
      content: "✔";
      color: #222831;
      font-size: 18px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
   }
   label {
      color: var(--color-white);
      font-size: 16px;
      font-weight: 500;
      margin-left: 12px;
   }
`;

export const AuthCheckbox = ({checked, onChange}) => (
   <Checkbox>
      <input type="checkbox" 
         id='verifyAge' 
         name='verifyAge'
         checked={checked}
         onChange={onChange}
      />
      <label htmlFor='verifyAge'>I am 13 years of age or older and agree to the terms of the Steam Subscriber Agreement and the Valve Privacy Policy.</label>
   </Checkbox>
)