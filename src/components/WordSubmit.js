import React from "react";
import { Button } from "semantic-ui-react";

const WordSubmit = ({ dice }) => {
    return (
        <div>
            <span>
                <strong>Current Word: </strong>
            </span>
            <Button primary>Submit Word</Button>
        </div>
    );
};

export default WordSubmit;
