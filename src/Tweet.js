import React from 'react';
import "./App.css";

function Tweet({name, message}) {
    return(
        <div className="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h4>Number of likes</h4>
            <p>Hehehehe</p>
        </div>
    )
}

export default Tweet;