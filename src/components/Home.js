import React, { useState } from "react";
import Counter from "./Counter";

function Home() {
  const [home, setHome] = useState(true);
  return (
    <div>
      <button onClick={() => setHome(true)}>Home</button>
      <button onClick={() => setHome(false)}>Counter</button>
      {home ? <h1>Home</h1> : <Counter />}
    </div>
  );
}

export default Home;
