import React from 'react';
import s from "./Button.module.css"

function Button(props) {

    return (
        <button
            className={s.customButton}
            onClick={props.onclick}
            style={props.style && props.style}
        >
            {(props.icon && typeof props.icon !== "string")  && <span> {props.icon}</span>}
            {typeof props.icon === "string" && <img className={s.loadingAnimation} src={props.icon} alt={"Loading"}/>}
            {props.children && props.children}
            <span>{props.title}</span>
        </button>
    );

}

export default Button;