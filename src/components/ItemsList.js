import React from "react";
import ListItem from "./ListItem";

function ItemsList() {
  return (
    <div id="items-list">
      <h3>List of things to do:</h3>
      <div className="boxes">
        <ListItem itemDesc="Clean room" />
        <ListItem itemDesc="Wash clothes" />
        <ListItem itemDesc="Buy milk" />
      </div>
    </div>
  );
}

export default ItemsList;
