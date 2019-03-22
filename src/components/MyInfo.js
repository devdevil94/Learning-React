import React from "react";

function MyInfo() {
  const fName = "Saud";
  const lName = "Dev";

  return (
    <div className="info">
      <h1>Hello, my name is {`${fName} ${lName}`}</h1>
      <p>Self-taught web developer</p>
      <ul>
        <li>Italy</li>
        <li>Spain</li>
        <li>Malta</li>
      </ul>
    </div>
  );
}

export default MyInfo;
