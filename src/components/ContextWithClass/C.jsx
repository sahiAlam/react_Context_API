import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { myContext } from "./A";
export default class C extends Component {
  render() {
    return (
      <>
        <h2>C Component</h2>
        <myContext.Consumer>
          {(data) => (
              <Table striped bordered hover variant="dark" size="sm" style={{margin: "0 auto"}}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>DEPT</th>
                  </tr>
                </thead>
                <tbody>
                  {data.employees.map(({ id, name, dept }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{dept}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
          )}
        </myContext.Consumer>
      </>
    );
  }
}