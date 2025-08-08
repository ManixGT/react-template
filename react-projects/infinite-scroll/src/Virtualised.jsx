// InfiniteScroll.jsx
import { useState, useEffect, useRef } from 'react';

export default function Virtualised() {
  const [items, setItems] = useState([]);
  const loaderRef = useRef(null);

  // Append new items
  const fetchItems = () => {
    setItems(prev => [
      ...prev,
      ...Array.from({ length: 10 }, (_, i) => prev.length + i + 1)
    ]);
  };

  // Load initial items
  useEffect(() => {
    fetchItems();
  }, []);

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) fetchItems();
    });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.unobserve(loaderRef.current);
  }, []);

  return (
    <div>
      {items.map(item => (
        <div key={item} style={{ padding: '8px', border: '1px solid #ccc' }}>
          Item {item}
        </div>
      ))}
      <div ref={loaderRef}>Loading...</div>
    </div>
  );
}