import React from "react";
import ListItem from "./ListItem";

function ItemsList() {
  return (
    <div id="items-list">
      <h3>List of things to do:</h3>
      <div className="boxes">
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </div>
  );
}

export default ItemsList;
