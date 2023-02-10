import { useState } from "react";
import Box from "@components/common/box";
import TextInput from "@components/common/text-input/";
import Heading from "@components/common/heading";

import StyledSearchArea from "./styled-search-area";

import SearchIcon from "@public/images/icons/search-icon.react.svg";
import CloseIcon from "@public/images/icons/close-icon.react.svg";

const SearchArea = ({ valueSearch, t, label }) => {
  const [searchItem, setSearchItem] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };

  const clearValueSearch = () => {
    setSearchItem("");
  };

  /*eslint-disable*/
  const imgSearch = !searchItem ? (
    <img className="search_img"
      src={SearchIcon.src}
      style={{ cursor: "default" }}
      alt="search"
      width="24px"
      height="24px"
    />
  ) : (
    <img
      src={CloseIcon.src}
      onClick={clearValueSearch}
      className="close-icon"
      alt="close"
      width="24px"
      height="24px"
    />
  );
  /*eslint-enable*/
  return (
    <StyledSearchArea className="search_area">
      <Box className="search_container" alignItems="center">
        <TextInput
          onChange={onSearch}
          value={searchItem}
          searchItem={searchItem}
          label={label}
          type="text"
          className="search_input"
          backgroundColor="#fffff"
          color="#333333"
          fontSize="16px"
          colorHover="#CCCCCC"
          labelColor={!valueSearch ? "#808080" : "#CCCCCC"}
        />
        <div className="search_icon">{imgSearch}</div>
      </Box>
    </StyledSearchArea>
  );
};

export default SearchArea;
