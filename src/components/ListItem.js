import React from "react";

function ListItem(props) {
  const listItemStyle = {
    padding: "5px",
    margin: "5px 0",
    border: "2px solid #743811",
    width: "200px"
  };
  return (
    <label style={listItemStyle} htmlFor="">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={checkboxChanged}
      />
      {" " + props.item.text}
    </label>
  );
}

function checkboxChanged() {
  console.log("Changed!!!");
}

export default ListItem;
