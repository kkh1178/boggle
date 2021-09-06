import React from "react";
import Button from "./Button";

const WordSubmit = ({ dice }) => {
    console.log(dice);
    return (
        <div>
            <span>
                <strong>Current Word: </strong>
                <Button></Button>
            </span>
        </div>
    );
};

export default WordSubmit;
