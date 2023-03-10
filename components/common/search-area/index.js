import StyledSearchArea from "./styled-search-area";
import Box from "@components/common/box";
import TextInput from "@components/common/text-input/";
import SearchIcon from "@public/images/icons/search-icon.react.svg";
import CloseIcon from "@public/images/icons/close-icon.react.svg";

const SearchArea = ({ valueSearch, label, placeholder, searchQuery, setSearchQuery, handleSearchFormSubmit, searchActive, onClick }) => {
  const onSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  /*eslint-disable*/
  const imgSearch = !searchQuery ? (
    <img className="search_img"
      src={SearchIcon.src}
      alt="search"
      width="24px"
      height="24px"
    />
  ) : (
    <img
      src={CloseIcon.src}
      onClick={() => setSearchQuery("")}
      className="close-icon"
      alt="close"
      width="24px"
      height="24px"
    />
  );
  /*eslint-enable*/

  return (
    <StyledSearchArea onSubmit={handleSearchFormSubmit} className={`search_area ${searchActive ? "active" : ""}`}>
      <Box className="search_container" alignItems="center">
        <TextInput
          onChange={onSearch}
          value={searchQuery}
          searchQuery={searchQuery}
          label={label}
          placeholder={placeholder}
          type="text"
          className="search_input"
          backgroundColor="#fffff"
          color="#333333"
          fontSize="16px"
          colorHover="#CCCCCC"
          labelColor={!valueSearch ? "#808080" : "#AAAAAA"}
        />
        <div onClick={onClick} className="search_icon">{imgSearch}</div>
      </Box>
    </StyledSearchArea>
  );
};

export default SearchArea;
