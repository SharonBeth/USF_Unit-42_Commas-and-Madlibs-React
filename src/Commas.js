import React, { useState } from "react";
import NumbersForm from "./NumbersForm";
import "./Commas.css"

function Commas() {

    const [entry, setEntry] = useState(0)

    const create = newEntry => {
        newEntry = Number.parseFloat(newEntry)
        let nextStep = newEntry.toLocaleString();
        setEntry(nextStep);
    };


    return (
        <div className="Commas">
            <NumbersForm addCommas={create} />
            <p>{entry}</p>
        </div>
    )
}

export default Commas;