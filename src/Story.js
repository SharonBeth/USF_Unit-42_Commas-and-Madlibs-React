import React, { useState } from "react";

function Story({ finalStory = "TEsting finalStaory" }) {
    // const [completeStory, setCompleteStory] = useState("")
    const [completeStory, setCompleteStory] = useState("")

    const story2 = ["There was a ", "who loved a ", " "]

    let final;

    if (finalStory[0].noun !== "") {
        final = `There was a ${finalStory[0].color} ${finalStory[0].noun} who loved a ${finalStory[0].adjective} ${finalStory[0].noun2}.`
    } else {
        final = "";
    }
    // const testingStory = setCompleteStory(story[0] + " " + finalStory[0].color + " " + finalStory[0].noun + " " + story[1] + " " + finalStory[0].adjective + " " + finalStory[0].noun2)
    return (
        <div className="Story">
            <p>{final}</p>
        </div>
    )
}

export default Story;