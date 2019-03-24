import React from "react";

function Conditional(props) {
  console.log(props.isLoading);
  if (props.isLoading === true) {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Goodbye</h1>
      </div>
    );
  }
}

export default Conditional;
