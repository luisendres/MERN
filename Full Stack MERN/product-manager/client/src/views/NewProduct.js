import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";

const NewProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState(null);

    // Used for routing the user to a new url.
    const history = useHistory();

    const handleNewProductSubmit = (e) => {
        e.preventDefault(); // stop page refresh

        const NewProduct = {
            //long-form - key: value
            title: title,
            //shorthand can be used when key name matches the var name
            price,
            description
        };

        axios
            .post("http://localhost:8000/api/products", NewProduct)
            .then((res) => {
                console.log(res.data);
                // Route user to the new product's page.
                history.push(`/products/${res.data._id}`);
        })
        .catch((err) => {
            setErrors(err.response.data.errors);
            console.log(err.response);
        });
    };
    
    return (
        <div className="w-50 mx-auto p-4 rounded shadow">
            <h3 className="text-center">Product Manager</h3>
            
            <form
                onSubmit={(e) => {
                    handleNewProductSubmit(e);
                }}
            >
                <div className="form-group">
                    <label className="h6">Title</label>
                    {errors?.title && (
                        <span className="text-danger"> {errors?.title?.message}</span>
                    )}
                    <input
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Price</label>
                    {errors?.price && (
                        <span className="text-danger"> {errors?.price?.message}</span>
                    )}
                    <input
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                        type="number"
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Description</label>
                    {errors?.description && (
                        <span className="text-danger"> {errors?.description?.message}</span>
                    )}
                    <input
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                        type="text"
                        className="form-control"
                    />
                </div>
                <button className="btn btn-sm btn-outline-success">Create</button>
            </form>
        </div>
    );
};

export default NewProduct;