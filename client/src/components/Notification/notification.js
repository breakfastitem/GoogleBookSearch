import React from "react";
import "./styles.css";

function Notification({msg}) {
    return (
    <div className="notification">
        <p>{msg}</p>
    </div>);
}


export default Notification;