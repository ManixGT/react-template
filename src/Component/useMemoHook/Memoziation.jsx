import { useMemo, useState } from "react";


//There is huge difference between useMemoHook and React.memo.

function Memoziation() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  // Step 1: Expensive loop is calculated only once
  const sum = useMemo(() => {
    console.log("🔁 Running expensive computation (sum only once)...");
    let s = 0;
    for (let i = 0; i < 1e7; i++) {
      s += i;
    }
    return s;
  }, []); // ✅ Empty dependency = only runs on mount

  // Step 2: Final value changes with multiplier (cheap operation)
  const finalResult = sum * multiplier;

  return (
    <div>
      <h1>🚀 Optimized Expensive Iteration: {finalResult}</h1>
      <p>Count: {count}</p>
      <p>Multiplier: {multiplier}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setMultiplier(multiplier + 1)}>Increment Multiplier</button>
    </div>
  );
}

export default Memoziation;
