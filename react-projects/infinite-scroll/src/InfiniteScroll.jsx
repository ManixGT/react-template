import { useEffect, useRef, useState } from "react";

export default function InfiniteScroll({ renderListItem, getData, listData, query }) {
  const pageNum = useRef(1);
  const loaderRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Fetch data when query changes
  useEffect(() => {
    if (!query) return;

    const loadInitial = async () => {
      pageNum.current = 1;
      setHasMore(true);
      setLoading(true);
      const data = await getData(query, pageNum.current);
      if (data.docs.length === 0) setHasMore(false);
      setLoading(false);
    };

    loadInitial();
  }, [query, getData]);

  // IntersectionObserver for infinite scroll
  useEffect(() => {
    if (!loaderRef.current || loading || !hasMore) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMore();
      }
    }, { threshold: 0.5 });

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loading, hasMore, query]);  // Re-run if query or scroll state changes

  const loadMore = async () => {
    setLoading(true);
    pageNum.current += 1;
    const data = await getData(query, pageNum.current);
    if (data.docs.length === 0) setHasMore(false);
    setLoading(false);
  };

  return (
    <div>
      {listData.map((item, index) => (
        <div key={index}>
          {renderListItem ? renderListItem(item) : <div>{item.title}</div>}
        </div>
      ))}
      <div ref={loaderRef}>
        {loading && <p>Loading...</p>}
        {!loading && !hasMore && listData.length > 0 && <p>No more results</p>}
      </div>
    </div>
  );
}
