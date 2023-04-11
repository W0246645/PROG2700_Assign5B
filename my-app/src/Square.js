import React from 'react';

function Square(props) { //functional react component
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;