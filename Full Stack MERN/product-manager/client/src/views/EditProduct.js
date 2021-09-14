import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditProduct = (props) => {
    const [prod, setProd] = useState(null);
    const [errors, setErrors] = useState(null);
    const history = useHistory();
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

    /* 
    You can break this dest object state into it's separate individual state,
    however, the data from the DB comes as one object, so to separate it would
    require: setKey1, setKey2, setKey3... and then when the form is submitted,
    we would need to recombine all the separate state back into 1 object to send
    it back to the DB via axios.put.
  */
    const handleOnChange = (e) => {
        const keyBeingUpdated = e.target.name;
        const newValue = e.target.value;

        setProd({ ...prod, [keyBeingUpdated]: newValue });
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
    
        axios
            .put("http://localhost:8000/api/products/" + prod._id, prod)
            .then((res) => {
                console.log(res.data);
                // Route user to the new destination's page.
                history.push(`/products/${prod._id}`);
            })
            .catch((err) => {
                // THIS CATCH only triggers because our controller uses
                // res.status(400).json(err);
                setErrors(err.response.data.errors);
                console.log(err.response);
            });
        };
    
        if (prod === null) {
            return "Loading...";
        }

    return (
        <div>
            <div className="w-50 mx-auto p-4 rounded shadow"></div>
            <h3 className="text-center">Product Manager</h3>
            
            <form
                onSubmit={(e) => {
                    handleEditSubmit(e);
                }}
            >
                <div className="form-group">
                    <label className="h6">Title</label>
                    {errors?.title && (
                        <span className="text-danger"> {errors?.title?.message}</span>
                    )}
                    <input
                        onChange={(e) => {
                            handleOnChange(e);
                        }}
                        type="text"
                        className="form-control"
                        value={prod.title}
                        name="title"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Price</label>
                    {errors?.price && (
                        <span className="text-danger"> {errors?.price?.message}</span>
                    )}
                    <input
                        onChange={(e) => {
                            handleOnChange(e);
                        }}
                        type="number"
                        className="form-control"
                        value={prod.price}
                        name="price"
                    />
                </div>

                <div className="form-group">
                    <label className="h6">Description</label>
                    {errors?.description && (
                        <span className="text-danger"> {errors?.description?.message}</span>
                    )}
                    <input
                        onChange={(e) => {
                            handleOnChange(e);
                        }}
                        type="text"
                        className="form-control"
                        value={prod.description}
                        name="description"
                    />
                </div>
                <button className="btn btn-sm btn-outline-success">Create</button>
            </form>
        </div>
    );
};

export default EditProduct;