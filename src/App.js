import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import "./App.css";

import Header from "./components/Header";
import LetterGrid from "./components/LetterGrid";
import Score from "./components/Score";
import WordSubmit from "./components/WordSubmit";
import randomDice from "./helpers/dice";
import SpellWord from "./components/SpellWord";

function App() {
    const [rollDice, setRollDice] = useState([]);
    // const [letter, setLetter] = useState(null);

    const playGame = () => {
        setRollDice(randomDice());
    };

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
            <SpellWord dice={rollDice}></SpellWord>
            <Score></Score>
        </div>
    );
}

export default App;
