import React, { Component } from "react";
import { myContext } from "./A";

export default class B extends Component {
  render() {
    return (
      <>
        <h2>B Component</h2>
        <myContext.Consumer>
          {(data) => (
            <>
              <h1>{data.name}</h1>
              <ol style={{ display: "inline-block" }}>
                {data.employees.map(({ id, name, dept }) => (
                  <li key={id}>{`Name: ${name} - Dept: ${dept}`}</li>
                ))}
              </ol>
            </>
          )}
        </myContext.Consumer>
      </>
    );
  }
}