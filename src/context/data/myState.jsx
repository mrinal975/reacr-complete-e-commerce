import React from "react";
import MyContext from "./myContext";

function MyState(props) {
  const state = {
    name: "Atrika",
    study: "One C",
  };
  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
}

export default MyState;
