import React, { useState, useEffect } from "react";

const LetterGrid = ({ dice }) => {
    console.log(dice);
    const [letters, setLetters] = useState(null);

    useEffect(() => {
        let diceIndex = 0;
        let rows = [];
        for (let i = 0; i < 5; i++) {
            let cols = [];
            for (let j = 0; j < 5; j++) {
                cols.push(
                    <div
                        className="boggle"
                        style={{ display: "inline-block" }}
                        key={diceIndex}
                    >
                        <span>{dice[diceIndex]}</span>
                    </div>
                );
                diceIndex++;
            }
            rows.push(<div key={i + diceIndex}>{cols}</div>);
        }

        setLetters(rows);
    }, [dice]);

    return <div>{letters}</div>;
};

export default LetterGrid;
