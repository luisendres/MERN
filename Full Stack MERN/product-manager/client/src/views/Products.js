import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = (props) => {
    // On first load this empty array will be displayed (shows nothing).
    // When the data comes back and this state is set, it re-renders.
    const[products, setProducts] = useState([]);

    /*
    Empty arr is second argument means this will only happenon the first render
    of this component.
    */
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDelete = (delId) => {
        axios
        .delete("http://localhost:8000/api/products/" + delId)
        .then((res) => {
            // It has successfully been deleted from the DATABASE
            // It is still IN our state, we need to remove it from state.
            const filterProducts = products.filter((prod) => {
                return prod._id !== delId;
            });

            setProducts(filterProducts);
        })
        .catch((err) => {
            console.log(err.response);
        });
    };

    return (
        <div className="w-50 mx-auto text-center">
            <h2>All Products</h2>

            {products.map((prod) => {
                return(
                    <div key={prod._id} className="shadow mb-4 p-4 rounded border">
                        <Link to={`/products/${prod._id}`}>
                            <h4>{prod.title}</h4>
                        </Link>
                        <button
                            onClick={(e) => {
                                handleDelete(prod._id);
                            }}
                            className="btn btn-sm btn-outline-danger mx-1"
                        >
                            Delete
                        </button>
                        <Link
                            to={`/products/${prod._id}/edit`}
                            className="btn btn-sm btn-outline-warning mx-1"
                        >
                            Edit
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Products;