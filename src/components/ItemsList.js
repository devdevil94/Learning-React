import React, { Component } from "react";
import ListItem from "./ListItem";
import toDoItems from "../toDoItems";

class ItemsList extends Component {
  constructor() {
    super();
    this.state = { toDoItems: toDoItems };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("Changed!!!");
    this.setState(prevState => {
      const updatedToDoItems = prevState.toDoItems.map(item => {
        if (id === item.id) {
          item.completed = !item.completed;
        }
      });
      return updatedToDoItems;
    });
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
            return (
              <ListItem
                key={item.id}
                item={item}
                handleChange={this.handleChange}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ItemsList;
