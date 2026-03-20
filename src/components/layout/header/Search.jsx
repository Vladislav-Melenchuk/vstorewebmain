import styled from 'styled-components';
import searchIcon from '../../../assets/icons/header-icons/search.svg'

const SearchWrapper = styled.div`
   width: 290px;
   display: flex;
   align-items: center;
   gap: 8px;
   background-color: #393E46;
   border-radius: 20px;
   padding: 12px;

   img {
      width: 16px;
      height: 16px;
      opacity: 0.75;
   }

   input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      font-size: 14px;
      color: var(--color-white);

      &::placeholder {
         color: var(--color-white);
         opacity: 0.7; 
         font-size: 14px;
      }
   }
`;

export const Search = () => (
   <SearchWrapper>
      <img src={searchIcon} alt="search icon"/>
      <input type='text'
             placeholder='search store'/>
   </SearchWrapper>
)