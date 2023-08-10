import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function MadlibsForm({ createStory }) {
    const [formData, setFormData] = useState({
        noun: "",
        noun2: "",
        adjective: "",
        color: ""
    })

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = evt => {
        evt.preventDefault();
        createStory({ ...formData });
        setFormData({ noun: "", noun2: "", adjective: "", color: "" })
    }
    return (
        <div className="Form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="chagne"> Choose the Story and add the words you add below!!</label>
                <input type="text" name="noun" value={formData.noun} onChange={handleChange} placeholder="noun" />
                <input type="text" name="noun2" value={formData.noun2} onChange={handleChange} placeholder="noun 2" />
                <input type="text" name="adjective" value={formData.adjective} onChange={handleChange} placeholder="adjective" />
                <input type="text" name="color" value={formData.color} onChange={handleChange} placeholder="color" />
                <button> Submit Story</button>
            </form>
        </div>
    )
}

export default MadlibsForm;