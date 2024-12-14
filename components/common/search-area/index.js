import StyledSearchArea from "./styled-search-area";

const SearchArea = ({ locale, valueSearch, label, placeholder, searchQuery, setSearchQuery, handleSearchFormSubmit, searchActive, onClick }) => {
  const onSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const imgSearch = !searchQuery ? (
    <span className="search-img" />
  ) : (
    <span onClick={() => setSearchQuery("")} className="close-icon" />
  );

  return (
    <StyledSearchArea
      locale={locale}
      onSubmit={handleSearchFormSubmit}
      className={`search-area ${searchActive ? "active" : ""}`}
      valueSearch={valueSearch}
    >
      <div>
        <input
          onChange={onSearch}
          value={searchQuery}
          className={`search-input ${searchQuery ? "focus" : ""}`}
          placeholder={placeholder}
        />
        <div className="input-label">
          {label}
        </div>
      </div>
      <div onClick={onClick} className="search-icon">{imgSearch}</div>
    </StyledSearchArea>
  );
};

export default SearchArea;
