import React from "react";
import ReactDOM from "react-dom";
import MyInfo from "./components/MyInfo.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import ItemsList from "./components/ItemsList.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MyInfo />
      <ItemsList />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
