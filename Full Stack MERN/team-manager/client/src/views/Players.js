import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Players = (props) => {
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

    const handleDelete = (delId, delName) => {
        if(window.confirm(`Are you sure you want to delete ${delName}`))
        {
            axios
            .delete("http://localhost:8000/api/players/" + delId)
            .then((res) => {
                // It has successfully been deleted from the DATABASE
                // It is still IN our state, we need to remove it from state.
                const filterPlayers = players.filter((play) => {
                    return play._id !== delId;
                });
                setPlayers(filterPlayers);
            })
            .catch((err) => {
                console.log(err.response);
            });
        }
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
                            to="/players/addplayer"
                            className="btn btn-sm btn-outline-info mx-1"
                        >
                            Add Player
                    </Link>
                </div>
            </nav>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((play) => {
                        return (
                            <tr key={play._id}>
                                <td>{play.name}</td>
                                <td>{play.position}</td>
                                <td>
                                    <button
                                        onClick={(e) => {
                                            handleDelete(play._id, play.name);
                                        }}
                                        className="btn btn-sm btn-outline-danger mx-1"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default Players;