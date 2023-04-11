import React from "react"

function MoveCounter(props) { //functional react component
    let x = 0;
    let o = 0;
    if (props.step != 0) {
        x = Math.floor(props.step / 2) + props.step % 2;
        o = Math.floor(props.step / 2);
    }

    return (
        <div>
            <span>X Move Count: {x.toString()}</span>
            <br/>
            <span>O Move Count: {o}</span>
        </div>
    );
}

export default MoveCounter
