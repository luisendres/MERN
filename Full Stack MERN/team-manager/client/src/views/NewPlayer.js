import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const NewPlayer = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [gameOne, setGameOne] = useState("undecided");
    const [gameTwo, setGameTwo] = useState("undecided");
    const [gameThree, setGameThree] = useState("undecided");
    const [errors, setErrors] = useState(null);

     // Used for routing the user to a new url.
    const history = useHistory();

    const handleOnSubmit = (e) => {
        e.preventDefault(); // stop page refresh

        const NewPlayer = {
            name,
            position,
            gameOne,
            gameTwo,
            gameThree
        };

        axios
            .post("http://localhost:8000/api/players/list", NewPlayer)
            .then((res) => {
                console.log(res.data);
                // Route user to the main page
                history.push(`/`);
        })
        .catch((err) => {
            setErrors(err.response.data.errors);
            console.log(err.response);
        });
    };

    return (
        <div className="w-75 mx-auto p-4 rounded shadow">
            <nav>
                <div className="navbar-nav flex-row">
                    <Link
                        to="/"
                        className="btn btn-sm btn-outline-primary mx-1"
                        >
                            List
                    </Link>

                    <Link
                            to="/"
                            className="btn btn-sm btn-outline-info mx-1"
                        >
                            Add Player
                    </Link>
                </div>
            </nav>
            <div className="w-75 p-4 rounded border">
                <h1>Add Player</h1>
            
                <form
                    onSubmit={(e) => {
                        handleOnSubmit(e);
                    }}
                >
                    <div className="form-group">
                        <label className="h6">Player Name:</label>
                        {errors?.name && (
                            <span className="text-danger"> {errors?.name?.message}</span>
                        )}
                        <input
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label className="h6">Preferred Position:</label>
                        <input
                            onChange={(e) => {
                                setPosition(e.target.value);
                            }}
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <button className="btn btn-sm btn-outline-success">Submit</button>
                </form>
                </div>
        </div>
    );
};
export default NewPlayer;