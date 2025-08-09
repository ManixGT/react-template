// VirtualizedInfiniteScroll.jsx
import { useState, useRef, useEffect } from 'react';

export default function VirtualizedInfiniteScroll() {
  const [items, setItems] = useState(Array.from({ length: 50 }, (_, i) => i + 1));
  const containerRef = useRef(null);
  const itemHeight = 40; // px
  const buffer = 5; // extra items above/below

  const [scrollTop, setScrollTop] = useState(0);
  const visibleCount = Math.ceil(window.innerHeight / itemHeight) + buffer * 2;

  // Scroll listener
  useEffect(() => {
    const el = containerRef.current;
    const onScroll = () => {
      setScrollTop(el.scrollTop);
      // Load more if near bottom
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 50) {
        setItems(prev => [...prev, ...Array.from({ length: 20 }, (_, i) => prev.length + i + 1)]);
      }
    };
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Calculate visible range
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
  const endIndex = Math.min(items.length, startIndex + visibleCount);
  const offsetY = startIndex * itemHeight;

  return (
    <div
      ref={containerRef}
      style={{ height: '100vh', overflowY: 'auto', border: '1px solid #ccc' }}
    >
      <div style={{ height: items.length * itemHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {items.slice(startIndex, endIndex).map(item => (
            <div
              key={item}
              style={{ height: itemHeight, borderBottom: '1px solid #eee', padding: '8px' }}
            >
              Item {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
