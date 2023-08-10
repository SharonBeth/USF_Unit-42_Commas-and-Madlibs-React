import React, { useState } from 'react';
import useFields from './hooks/useFields';
import Commas from './Commas';

const NumbersForm = ({ addCommas }) => {
    const [numComma, setNumComma] = useState(0);

    const handleChange = evt => {
        setNumComma(evt.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(typeof (numComma))
        addCommas(numComma)
        setNumComma("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="change">Change the Number to a string and add commas:</label>
                <input type="number" name="testing" value={numComma} onChange={handleChange} placeholder="number" />
                <button>Submit Numbers</button>
            </form>
        </div>

    )
}

export default NumbersForm;