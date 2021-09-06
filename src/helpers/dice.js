const randomDice = () => {
    // What the dice will look like in a Boogle game per the internet
    const dice = {
        dice1: ["A", "A", "A", "F", "R", "S"],
        dice2: ["A", "A", "E", "E", "E", "E"],
        dice3: ["A", "A", "F", "I", "R", "S"],
        dice4: ["A", "D", "E", "N", "N", "N"],
        dice5: ["A", "E", "E", "E", "E", "M"],
        dice6: ["A", "E", "E", "G", "M", "U"],
        dice7: ["A", "E", "G", "M", "N", "N"],
        dice8: ["A", "F", "I", "R", "S", "Y"],
        dice9: ["B", "J", "K", "Qu", "X", "Z"],
        dice10: ["C", "C", "N", "S", "T", "W"],
        dice11: ["C", "E", "I", "I", "L", "T"],
        dice12: ["C", "E", "I", "L", "P", "T"],
        dice13: ["C", "E", "I", "P", "S", "T"],
        dice14: ["D", "H", "H", "N", "O", "T"],
        dice15: ["D", "H", "H", "L", "O", "R"],
        dice16: ["D", "H", "L", "N", "O", "R"],
        dice17: ["D", "D", "L", "N", "O", "R"],
        dice18: ["E", "I", "I", "I", "T", "T"],
        dice19: ["E", "M", "O", "T", "T", "T"],
        dice20: ["E", "N", "S", "S", "S", "U"],
        dice21: ["F", "I", "P", "R", "S", "Y"],
        dice22: ["G", "O", "R", "R", "V", "W"],
        dice23: ["H", "I", "P", "R", "R", "Y"],
        dice24: ["N", "O", "O", "T", "U", "W"],
        dice25: ["O", "O", "O", "T", "T", "U"],
    };

    // getting the number of keys in the dice object
    let diceKeys = Object.keys(dice);

    // Create a function that will randomize an array without repeating anything
    function shuffle(array) {
        let i = array.length;
        let j = 0;
        let temp;

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    let position = shuffle(diceKeys);

    let letters = position.map(function (die) {
        let roll = shuffle(dice[die]);
        return roll[0];
    });

    return letters;
};

export default randomDice;
