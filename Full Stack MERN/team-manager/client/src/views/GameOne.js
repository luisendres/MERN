import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const GameOne = (props) => {
    // On first load this empty array will be displayed (shows nothing).
    // When the data comes back and this state is set, it re-renders.
    const[players, setPlayers] = useState([]);
    const[p, setP] = useState(null);

    const history = useHistory();
    // const { id } = useParams();

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

    const handleOnClick = (id) => {
        
        let keyBeingUpdated ="gameOne";
        let newValue = "playing";

        axios
            .get("http://localhost:8000/api/" + id)
            .then((res) => {
                setP(res.data);
                keyBeingUpdated = p.gameOne;
                newValue = "playing";
                // history.push(`/`);
            })
            .catch((err) => {
                // res.status(400).json(err);
                console.log(err.response);
            });

        // const keyBeingUpdated = p.gameOne;
        // const newValue = "playing";

        setP({ ...p, [keyBeingUpdated]: newValue });

        // axios
        //     .put("http://localhost:8000/api/" + p._id, p)
        //     .then((res) => {
        //         console.log(res.data);
        //         // Route user to the new destination's page.
        //         // history.push(`/`);
        //     })
        //     .catch((err) => {
        //         console.log(err.response);
        //     });
        
    }

    const handleEditSubmit = (id) => {
        // e.preventDefault()

        // axios
        //     .get("http://localhost:8000/api/" + p._id)
        //     .then((res) => {
        //         setP(res.data);
        //         // history.push(`/`);
        //     })
        //     .catch((err) => {
        //         // res.status(400).json(err);
        //         console.log(err.response);
        //     });

            axios
            .put("http://localhost:8000/api/" + id, p)
            .then((res) => {
                console.log(res.data);
                // Route user to the new destination's page.
                // history.push(`/`);
            })
            .catch((err) => {
                console.log(err.response);
            });
    };


    return (
        <div className="w-75 mx-auto p-4 rounded shadow">
            <h1>Player Status</h1>
            <nav>
                <div className="navbar-nav flex-row">
                    <Link
                        to="/players/status/game1"
                        className="btn btn-sm btn-outline-primary mx-1"
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
                            className="btn btn-sm btn-outline-info mx-1"
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
                                    {/* <form
                                        onSubmit={(e) => {
                                            handleEditSubmit(play._id);
                                        }}
                                    > */}
                                        {play.gameOne === "playing" ?
                                            <button
                                                // onClick={(e) => {
                                                //     handleDelete(play._id);
                                                // }}
                                                className="btn btn-sm btn-success mx-1"
                                            >
                                                Playing
                                            </button>
                                        :
                                        <form 
                                        onSubmit={(e) => {
                                            handleEditSubmit(play._id);
                                        }}>

                                                <button
                                                    onClick={(e) => {
                                                        handleOnClick(play._id);
                                                    }}
                                                    className="btn btn-sm btn-outline-dark mx-1"
                                                    value="playing"
                                                    >
                                                    Playing
                                                </button>
                                                </form>
                                        }
                                        {play.gameOne === "notPlaying" ?
                                            <button
                                                // onClick={(e) => {
                                                //     handleDelete(play._id);
                                                // }}
                                                className="btn btn-sm btn-danger mx-1"
                                            >
                                                Not Playing
                                            </button>
                                        :
                                            <button
                                                // onClick={(e) => {
                                                //     handleDelete(play._id);
                                                // }}
                                                className="btn btn-sm btn-outline-dark mx-1"
                                            >
                                                Not Playing
                                            </button>
                                        }
                                        {play.gameOne === "undecided" ?
                                            <button
                                                // onClick={(e) => {
                                                //     handleDelete(play._id);
                                                // }}
                                                className="btn btn-sm btn-warning mx-1"
                                            >
                                                Undecided
                                            </button>
                                        :
                                            <button
                                                // onClick={(e) => {
                                                //     handleDelete(play._id);
                                                // }}
                                                className="btn btn-sm btn-outline-dark mx-1"
                                            >
                                                Undecided
                                            </button>
                                        }
                                    {/* </form> */}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default GameOne;