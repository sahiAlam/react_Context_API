import React, { Component } from "react";
import { Provider } from "./Context";
import Component2 from "./Component2";
export default class Component1 extends Component {
  constructor() {
    super();
  }
  state = {
    name: "India",
    count: 0,
  };
  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const contextValue = {
      count: this.state.count,
      setFunction: this.handleCount,
    };
    return (
      <>
        <p>Context Api using separate Context.js file</p>
        <Provider value={contextValue}>
          <Component2 />
        </Provider>
      </>
    );
  }
}