import React from "react";

function ListItem(props) {
  return (
    <label className="list-item" htmlFor="">
      <input type="checkbox" />
      {" " + props.itemDesc}
    </label>
  );
}

export default ListItem;
