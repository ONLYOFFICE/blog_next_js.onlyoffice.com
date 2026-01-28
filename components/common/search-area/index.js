import StyledSearchArea from "./styled-search-area";
import React, { forwardRef } from "react";

const SearchArea = forwardRef(({ t, locale, label, placeholder, searchQuery, setSearchQuery, handleSearchFormSubmit, searchHeader, setSearchShow }, ref) => {
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
      $locale={locale}
      onSubmit={handleSearchFormSubmit}
      className="search-area"
    >
      <div>
        <input
          ref={ref}
          onChange={onSearch}
          id="search-area"
          value={searchQuery}
          className={`search-input ${searchQuery ? "focus" : ""}`}
          placeholder={placeholder}
        />
        <label htmlFor="search-area" className="input-label">
          {label}
        </label>
      </div>
      <button
        onClick={handleButtonClick}
        className={`search-icon ${searchQuery || searchHeader ? "has-query" : ""}`}
        aria-label={t("Search")}
        type="button"
      >
      </button>
    </StyledSearchArea>
  );
});

SearchArea.displayName = "SearchArea";

export default SearchArea;
