import React from "react";
import useCustomHook from "./useCustomHook";


function UtilisingHook() {
    const url = "https://fakestoreapi.com/products";
   const { data, loading, error } = useCustomHook(url);

   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Products</h1>
            {data && data.length > 0 ? (
                <ul>
                    {data.map(product => (
                        <li key={product.id}>{product.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No products found</p>
            )}
        </div>
    );
}

export default UtilisingHook;



