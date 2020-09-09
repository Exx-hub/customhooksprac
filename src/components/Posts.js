import React from "react";
import useFetchData from "../customHooks/useFetchData";
import { useStateToggler } from "../customHooks/useStateToggler";

function Posts() {
  const [posts] = useFetchData("posts");
  const [active, setActive] = useStateToggler(true); //customhook state toggler

  return (
    <div>
      <button onClick={() => setActive((prev) => !prev)}>toggle</button>
      {active ? <p>hello</p> : ""}
      <h1>POSTS</h1>
      {posts.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}

export default Posts;
