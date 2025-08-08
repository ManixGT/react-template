import { useState, useRef, useCallback } from "react";

export const Virtualised = useCallback(({ list, itemHeight = 40, containerHeight = 400 }) => {
  const [startIndex, setStartIndex] = useState(0);
  const listRef = useRef(null);

  const totalItems = list.length;
  const visibleCount = Math.ceil(containerHeight / itemHeight);

  const handleScroll = useCallback((e) => {
    const scrollTop = e.target.scrollTop;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    setStartIndex(newStartIndex);
  }, [list]);

  const visibleItems = list.slice(startIndex, startIndex + visibleCount);

  return (
    <div
      ref={listRef}
      style={{
        height: containerHeight,
        overflowY: "auto",
        position: "relative",
        border: "1px solid #ccc",
      }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalItems * itemHeight, position: "relative" }}>
        {visibleItems.map((item, i) => (
          <div
            key={startIndex + i}
            style={{
              position: "absolute",
              top: (startIndex + i) * itemHeight,
              left: 0,
              right: 0,
              height: itemHeight,
              boxSizing: "border-box",
              borderBottom: "1px solid #eee",
              padding: "10px",
              background: "#fff",
            }}
          >
            {"Item " + item}
          </div>
        ))}
      </div>
    </div>
  );
});