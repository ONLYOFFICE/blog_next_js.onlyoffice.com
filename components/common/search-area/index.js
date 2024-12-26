import StyledSearchArea from "./styled-search-area";
import React, { forwardRef } from "react";

const SearchArea = forwardRef(({ locale, valueSearch, label, placeholder, searchQuery, setSearchQuery, handleSearchFormSubmit, searchHeader, setSearchShow }, ref) => {
  const onSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleButtonClick = () => {
    if (searchHeader) {
      setSearchShow(false);
    } else {
      setSearchQuery("");
    }
  };

  return (
    <StyledSearchArea
      locale={locale}
      onSubmit={handleSearchFormSubmit}
      className="search-area"
      valueSearch={valueSearch}
    >
      <div>
        <input
          ref={ref}
          onChange={onSearch}
          value={searchQuery}
          className={`search-input ${searchQuery ? "focus" : ""}`}
          placeholder={placeholder}
        />
        <div className="input-label">
          {label}
        </div>
      </div>
      <button
        onClick={handleButtonClick}
        className={`search-icon ${searchQuery || searchHeader ? "has-query" : ""}`}
        type="button"
      >
      </button>
    </StyledSearchArea>
  );
});

SearchArea.displayName = "SearchArea";

export default SearchArea;
