import React from "react";
import useFetchData from "../customHooks/useFetchData";

function Todos() {
  const [todos] = useFetchData("todos");

  return (
    <div>
      <h1>TODOS</h1>
      {todos.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default Todos;
