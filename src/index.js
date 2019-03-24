import React, { Component } from "react";
import ReactDOM from "react-dom";
import MyInfo from "./components/MyInfo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import Conditional from "./components/Conditional";
import Form from "./components/Form";
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
      count: 0,
      isLoading: true,
      character: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 2500);

    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ character: data });
      });
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
          {/* <div>{this.state.character.name}</div> */}
        </div>
        {this.state.isLoading ? (
          <div>
            <h1>Hello</h1>
          </div>
        ) : (
          <Conditional />
        )}
        <Form />
        <Footer />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
