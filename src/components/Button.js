import React from "react";

const Button = ({ message, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>{message}</button>
        </div>
    );
};

export default Button;
