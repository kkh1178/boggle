import React from "react";

const Score = () => {
    return (
        <table className="score-table">
            <tbody>
                <tr>
                    <th>Word</th>
                    <th>Score</th>
                </tr>
                <tr>
                    <td>test</td>
                    <td>11</td>
                </tr>
                <tr>
                    <td>test2</td>
                    <td>13</td>
                </tr>
                <tr className="footer">
                    <td>Total</td>
                    <td>13</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Score;
