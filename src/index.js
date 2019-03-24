import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyInfo from "./components/MyInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import ProductsList from "./components/ProductsList";

import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <MyInfo />
//       <ItemsList />
//       <ProductsList />
//       <Footer />
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: "yes"
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MyInfo />
        <ItemsList />
        <ProductsList />
        <h1>Do you know the way? {this.state.answer}</h1>
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
