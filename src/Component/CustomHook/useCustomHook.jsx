import React, { useState, useEffect } from "react";

function useCustomHook(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    console.log("useCustomHook", url);
    
    useEffect(() => {
        console.log("Fetching data from:", url);
        setData(null);
        setError(null);

        if (!url) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result);
                console.log("Fetched Data:", result);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useCustomHook;

