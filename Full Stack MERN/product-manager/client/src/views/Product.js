import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = (props) => {
    const [prod, setProd] = useState(null);

    const { id } = useParams();

    /* 
    Empty arr as second argument means this will only happen on the first render
    of this component.
  */
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" + id)
            .then((res) => {
                setProd(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    if (prod == null) {
        return "Loading..."
    }

    const handleDelete = (delId) => {
        axios
        .delete("http://localhost:8000/api/products/" + delId)
        .then((res) => {
            // It has successfully been deleted from the DATABASE
            // It is still IN our state, we need to remove it from state.
            const filterProducts = prod.filter((prod) => {
                return prod._id !== delId;
            });

            setProd(filterProducts);
        })
        .catch((err) => {
            console.log(err.response);
        });
    };

    return (
        <div className="w-100 mx-auto shadow mb-4 rounded border p-4">
            <h4>{prod.title}</h4>
            <p>${prod.price}</p>
            <p>{prod.description}</p>
            <button
                onClick={(e) => {
                    handleDelete(prod._id);
                }}
                className="btn btn-sm btn-outline-danger mx-1"
            >
                Delete
            </button>
        </div>
    );
};

export default Product