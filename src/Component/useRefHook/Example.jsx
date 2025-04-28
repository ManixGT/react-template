//Great Example of how these hooks work together.
import { useState, useEffect, useRef } from "react";

function Example() {
  console.log("Component Rendered");

  const [count, setCount] = useState(0);
  const refCount = useRef(0);
  const prevRef = useRef(0); // Stores previous value
  const prevvvvRef = useRef(0);

  useEffect(() => {
    console.log("useEffect ran because count changed:", count);
  }, [count]);

  const incrementState = () => {
    console.log('Increment State');
    setCount((prev) => prev + 1); // Triggers re-render and useEffect
    console.log('count value:', count);
  };

  const incrementRef = () => {
    prevvvvRef.current = prevRef.current;
    prevRef.current = refCount.current; // ✅ Store previous value before updating
    refCount.current += 1; // No re-render
    console.log("refCount.current:", refCount.current);
    console.log('prevRefCount:', prevRef.current);
    console.log('prevvvvRef Count:', prevvvvRef.current);
  };

  return (
    <div>
      <p>State Count: {count}</p>
      <p>Ref Count: {refCount.current}</p> {/* ✅ Corrected display */}
      <p>Previous Ref Count: {prevRef.current}</p> {/* ✅ Corrected display */}
      <p>Memo Func: {heavyTask}</p>
      <button onClick={incrementState}>Increment State</button>
      <button onClick={incrementRef}>Increment Ref</button>
    </div>
  );
}

export default Example;
