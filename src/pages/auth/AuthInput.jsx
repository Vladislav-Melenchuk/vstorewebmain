import styled from 'styled-components'

const Input = styled.div`
   display: flex;
   flex-direction: column;
   margin-bottom: 26px;

   h4 {
      color: var(--color-white);
      font-size: 16px;
      font-weight: 900;
      margin-bottom: 8px;
   }
   input {
      color: white;
      font-size: 24px;
      background: #606976;
      opacity: 40%;
      width: 748px;
      padding: 24px 24px;
      border: none;
      border-radius: 5px;
      outline: none;
   }
`;

export const AuthInput = ({ label, value, onChange, onBlur, error, type = 'text' }) => (
   <Input>
      <h4>{label}</h4>
      <input type={type}
         value={value}
         onChange={onChange}
         onBlur={onBlur} />
      {error && <span style={{ color: 'red', fontSize: '14px' }}>{error}</span>}

   </Input>

)