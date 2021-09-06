import React, { useState } from "react";
import Header from "./components/Header";
import LetterGrid from "./components/LetterGrid";
import Score from "./components/Score";
import WordSubmit from "./components/WordSubmit";
import randomDice from "./helpers/dice";
// import Button from "./components/Button";
import { Button } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

import "./App.css";

function App() {
    const [rollDice, setRollDice] = useState([]);

    const playGame = () => {
        console.log("made it");
        setRollDice(randomDice());
    };

    console.log(rollDice);

    return (
        <div>
            <Header></Header>
            <Button primary onClick={playGame}>
                Play!
            </Button>

            <div className="board">
                <div className="boggle-container">
                    <LetterGrid dice={rollDice}></LetterGrid>
                </div>
            </div>
            <WordSubmit dice={rollDice}></WordSubmit>
            <Score></Score>
        </div>
    );
}

export default App;
