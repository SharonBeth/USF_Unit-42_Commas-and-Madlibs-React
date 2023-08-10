import React, { useState } from "react";
import "./Madlibs.css";
import MadlibsForm from "./MadlibsForm";
import { v4 as uuid } from 'uuid';
import Story from "./Story";

function Madlibs() {
    const INITIAL_STATE = [
        { color: "", noun: "", noun2: "", adjective: "" }
    ]
    const [storyParts, setStoryParts] = useState(INITIAL_STATE)

    const story = (newStory) => {
        setStoryParts(storyParts => [{ ...newStory, id: uuid() }])
    }

    
    return (
        <div className="Madlibs">
            <p>MadLibs!!</p>
            < MadlibsForm createStory={story} />
            <Story finalStory={storyParts} />
        </div>
    )
}

export default Madlibs;

// There was a(purple)(slug) who loved a(hungry)(butterfly)

