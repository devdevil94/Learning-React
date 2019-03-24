import React, { Component } from "react";
import ListItem from "./ListItem";
import toDoItems from "../toDoItems";

class ItemsList extends Component {
  constructor() {
    super();
    this.state = { toDoItems: toDoItems };
  }

  render() {
    const itemsContainerStyle = {
      display: "flex",
      flexDirection: "column"
    };
    return (
      <div>
        <h3>List of things to do:</h3>
        <div style={itemsContainerStyle}>
          {toDoItems.map(item => {
            return <ListItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default ItemsList;
