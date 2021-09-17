import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GameThree = (props) => {
    // On first load this empty array will be displayed (shows nothing).
    // When the data comes back and this state is set, it re-renders.
    const[players, setPlayers] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/players/list")
            .then((res) => {
                console.log(res.data);
                setPlayers(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="w-75 mx-auto p-4 rounded shadow">
            <h1>Player Status</h1>
            <nav>
                <div className="navbar-nav flex-row">
                    <Link
                        to="/players/status/game1"
                        className="btn btn-sm btn-outline-info mx-1"
                        >
                            Game 1
                    </Link>

                    <Link
                            to="/players/status/game2"
                            className="btn btn-sm btn-outline-info mx-1"
                        >
                            Game 2
                    </Link>

                    <Link
                            to="/players/status/game3"
                            className="btn btn-sm btn-outline-primary mx-1"
                        >
                            Game 3
                    </Link>
                </div>
            </nav>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((play) => {
                        return (
                            <tr key={play._id}>
                                <td>{play.name}</td>
                                <td>
                                    <button
                                        // onClick={(e) => {
                                        //     handleDelete(play._id);
                                        // }}
                                        className="btn btn-sm btn-outline-success mx-1"
                                    >
                                        Playing
                                    </button>
                                    <button
                                        // onClick={(e) => {
                                        //     handleDelete(play._id);
                                        // }}
                                        className="btn btn-sm btn-outline-danger mx-1"
                                    >
                                        Not Playing
                                    </button>
                                    <button
                                        // onClick={(e) => {
                                        //     handleDelete(play._id);
                                        // }}
                                        className="btn btn-sm btn-outline-warning mx-1"
                                    >
                                        Undecided
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default GameThree;