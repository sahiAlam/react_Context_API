import React, { Component } from "react";
import B from "./B";
import C from "./C";
export const myContext = React.createContext();

export default class A extends Component {
  constructor() {
    super();
  }
  state = {
    name: "Sahil Khan",
    count: 0,
  };
  render() {
    const empData = [
      { id: 1, name: "Sahil Khan", dept: "IT" },
      { id: 2, name: "Rahil Khan", dept: "CSE" },
      { id: 3, name: "Sohel Khan", dept: "IT" },
      { id: 4, name: "Mustak Khan", dept: "CSE" },
      { id: 5, name: "Imran Khan", dept: "CSE" },
      { id: 6, name: "Mustak Khan", dept: "CSE" },
      { id: 7, name: "Imran Khan", dept: "CSE" }
    ];

    const contextValue = {
      name: this.state.name,
      count: this.state.count,
      employees: empData,
    };
    return (
      <>
        <h2>A Component</h2>
        <myContext.Provider value={contextValue}>
          <B />
          <C />
        </myContext.Provider>
      </>
    );
  }
}
