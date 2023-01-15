import React, { Component } from "react";
import { Consumer } from "./Context";

export default class Component2 extends Component {
  render() {
    return (
      <Consumer>
        {(data) => (
          <>
            <h1>{data.count}</h1>
            <button onClick={() => data.setFunction()}>Update Count</button>
          </>
        )}
      </Consumer>
    );
  }
}