// Without useMemo (Unnecessary child re-renders) , where you imports your child they gonna re-render there as well.

import { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [count, setCount] = useState(0);

  const user = { name: "Mani", age: 24 }; // New object every render!

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent user={user} />
    </div>
  );
}

export default ParentComponent;
