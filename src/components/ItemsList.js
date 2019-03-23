import React from "react";
import ListItem from "./ListItem";
import toDoItems from "../toDoItems";

function ItemsList() {
  const itemsContainerStyle = {
    display: "flex",
    flexDirection: "column"
  };

  return (
    <div>
      <h3>List of things to do:</h3>
      <div style={itemsContainerStyle}>{toDoItems.map(createListItems)}</div>
    </div>
  );
}

function createListItems(item) {
  return <ListItem item={item} />;
}

export default ItemsList;
