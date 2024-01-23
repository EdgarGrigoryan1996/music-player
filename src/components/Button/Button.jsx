import React from 'react';
import s from "./Button.module.css"

function Button(props) {
    console.log(props.style)
    return (
        <button
            className={s.customButton}
            onClick={props.onclick}
            style={props.style && props.style}
        >
            {props.icon && <span> {props.icon}</span>}
            <span>{props.title}</span>
        </button>
    );

}

export default Button;