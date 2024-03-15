import "./TodoSearch.css";

import React from "react";

function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <input
      placeholder="Hacer curso React.js"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      disabled={loading}
    />
  );
}

export { TodoSearch };
