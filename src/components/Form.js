import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (event.target.name === "firstName")
      this.setState({ firstName: event.target.value });
    else this.setState({ lastName: event.target.value });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={this.handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={this.handleChange}
        />
        <h2>{this.state.firstName + " " + this.state.lastName}</h2>
      </form>
    );
  }
}

export default Form;
