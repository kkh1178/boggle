import React from "react";
import Header from "./components/Header";
import LetterGrid from "./components/LetterGrid";
import Score from "./components/Score";
import WordSubmit from "./components/WordSubmit";
import randomDice from "./helpers/dice";

import "./App.css";

function App() {
    return (
        <div>
            <Header></Header>
            <div className="board">
                <div className="boggle-container">
                    <LetterGrid dice={randomDice()}></LetterGrid>
                </div>
            </div>
            <WordSubmit dice={randomDice()}></WordSubmit>
            <Score></Score>
        </div>
    );
}

export default App;
