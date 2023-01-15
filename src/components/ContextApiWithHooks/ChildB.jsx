import React, { useContext } from "react";
import { data } from "./ChildA";
function ChildB() {
  const contextData = useContext(data);
  return (
    <>
      {contextData.map(({ id, name, roll }) => (
        <ol style={{ margin: "0 auto" }}>
          <li key={id}>
            Name: {name}, Roll: {roll}
          </li>
        </ol>
      ))}
    </>
  );
}

export default ChildB;