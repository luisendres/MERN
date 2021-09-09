import React, { useState } from "react";
import { useHistory } from "react-router";

const Form = (props) => {
    const [type, setType] = useState("people");
    const [id, setId] = useState(1);
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        history.push(`/${type}/${id}`);
    }

    return (
        <form onSubmit={search}>
            <label>Search for: </label>
            <select onChange={e => setType(e.target.value)} value={type}>
                <option>people</option>
                <option>planets</option>
            </select>
            <label> ID: </label>
            <input type="number" min={1} onChange={e => setId(e.target.value)} value={id} />
            <input type="submit" value="Search" />
        </form>
    );
}

export default Form;
