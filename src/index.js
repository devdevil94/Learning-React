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
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("i have been clicked!");
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MyInfo />
        <ItemsList />
        <ProductsList />
        <div style={{ width: "100px", height: "100px", textAlign: "center" }}>
          <h1>{this.state.count}</h1>
          <button onClick={this.handleClick}>Changed!</button>
        </div>
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
