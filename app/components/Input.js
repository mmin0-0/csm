import { hide } from '../styles/global.css';
import * as inpStyle from '../styles/components/Input.css';

export const SearchBar = ({ children, ...props }) => {

  return (
    <div tabIndex={0} className={inpStyle.searchContainer}>
      <input 
        type="text" 
        name="search" 
        placeholder="검색어를 입력해주세요."
        className={`${inpStyle.searchInput} search-input`} 
        {...props} 
      />
      <label className={hide}>search</label>
    </div>
  );
};
