import axios from "axios";
import { useEffect, useState } from "react";

function DebouncedSearch(params) {
  console.log('inside DebouncedSearch useEffect');
  const [input, setInput] = useState();
  const [debouncedValue, setDebouncedValue] = useState(input);


  // 📌 Scenario	🧠 When it happens	🛠️ useEffect callback runs?	🧹 Cleanup function runs?
  // ✅ Component Mounts	Component renders for the first time	✅ YES	❌ NO
  // 🔁 Dependency Changes	A value in the [deps] array changes	✅ YES	✅ YES (runs cleanup for old effect)
  // ❌ Component Unmounts	Component is removed from the DOM	❌ NO	✅ YES (runs cleanup for last effect)


  useEffect(() => {
    const handler = setTimeout(() => { setDebouncedValue(input) }, 1000);

    //cleanup function in react, it runs when the dependency changes ,Cancel previous timeout to avoid race conditions. Cleanup function doesn't run on very first time , it runs only when there is something to clean. Basically works according mount and unmount.
    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  useEffect(() => {
    if (debouncedValue) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${debouncedValue}`).then((res) => {
        console.log(res.data);
      });
    }
  }, [debouncedValue]);

  return (
    <div>
      <input type="text" placeholder="Search Input..."
        onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default DebouncedSearch;
