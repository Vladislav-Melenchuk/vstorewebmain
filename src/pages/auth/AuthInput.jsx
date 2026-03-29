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
    display: block;
  }

  input {
    color: white;
    font-size: 24px;
    background: #606976;
    opacity: 0.4;
    width: 748px;
    padding: 24px;
    border: none;
    border-radius: 5px;
    outline: none;
  }

  span {
    color: red;
    font-size: 14px;
    margin-top: 6px;
  }
  .row {
      display: flex;
      align-items: baseline;
      gap: 12px;
  }
`

export const AuthInput = ({ label, value, onChange, type = 'text', error }) => {
  return (
    <Input>
      <div className="row">
         <h4>{label}</h4>
         {error && <span>{error}</span>}
      </div>
      
      <input
         type={type}
         value={value}
         onChange={onChange}
      />
   
    </Input>
  )
};