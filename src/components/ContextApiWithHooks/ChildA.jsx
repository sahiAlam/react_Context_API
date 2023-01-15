import React, { createContext } from "react";
import ChildB from "./ChildB";

export const data = createContext();

const ChildA = () => {
  const userData = [
    { id: 1, name: "Khan", roll: "10" },
    { id: 2, name: "Shaikh", roll: "11" },
    { id: 3, name: "Hossain", roll: "12" },
  ];

  return (
    <>
      <data.Provider value={userData}>
        <ChildB />
      </data.Provider>
    </>
  );
};

export default ChildA;