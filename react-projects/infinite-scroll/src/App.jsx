import { useCallback, useState, useEffect } from "react";
import InfiniteScroll from "./InfiniteScroll.jsx";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const handleInput = useCallback((event) => {
    setQuery(event.target.value);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(timer);
  }, [query]);

  const getData = useCallback(async (query, pageNum) => {
    if (!query) return { docs: [] };
    const response = await fetch(
      `https://openlibrary.org/search.json?${new URLSearchParams({ q: query, page: pageNum })}`
    );
    const data = await response.json();
    setData(prev => pageNum === 1 ? data.docs : [...prev, ...data.docs]);
    return data;
  }, []);

  return (
    <>
      <input type="text" value={query} onChange={handleInput} />
      <InfiniteScroll
        getData={getData}
        listData={data}
        query={debouncedQuery}
        renderListItem={(item) => <div>{item.title}</div>}
      />
    </>
  );
}

export default App;
