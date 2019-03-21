import React from "react";

function ItemsList() {
  return (
    <div id="items-list">
      <h3>List of things to do:</h3>
      <div className="boxes">
        <label htmlFor="">
          <input type="checkbox" />
          Clean room
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          Clean room
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          Clean room
        </label>
      </div>
    </div>
  );
}

export default ItemsList;
