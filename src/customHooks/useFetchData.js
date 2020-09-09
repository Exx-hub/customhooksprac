import { useState, useEffect } from "react";

export default function useFetchData(query) {
  const [data, setData] = useState([]);

  const getData = (param) => {
    fetch(`https://jsonplaceholder.typicode.com/${param}?_limit=5`)
      .then((res) => res.json())
      .then((result) => setData(result));
  };

  // separate function not really necessary
  useEffect(() => {
    getData(query);
  }, [query]);

  return [data];
}
