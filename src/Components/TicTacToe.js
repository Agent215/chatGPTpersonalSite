import React, { useState, useEffect } from 'react';

const winningCombinations = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];

function TicTacToe() {
    const [board, setBoard] = useState(new Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);
    const [gameOnFlag, setGameOnFlag] = useState(null);
    const [aiNext, setAiNext] = useState(true);

    useEffect(() => {
      console.log('render a frame')
      console.log("current player :" + currentPlayer);
    }, [aiNext]);

    const handleClick = (index, player) => {
        if (board[index] || gameOver) return;
        console.log("in handleClick as player :" + currentPlayer)
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        if (checkForWin(newBoard)) {
            setGameOver(true);
            setWinner(currentPlayer);
            return;
        }
        if (currentPlayer === 'X') {
            console.log("setting player to O");
            setCurrentPlayer('O');
            setAiNext(false);
            console.log("current player :" + currentPlayer);
            console.log("getting computer move")
            const computerMove = getComputerMove(board);
            if (computerMove !== null) {
                console.log("moving computer")
                handleClick(computerMove, 'O'); // make the computer's move immediately
            }
        } else {
            console.log("in else setting player to X")
            setCurrentPlayer('X');
            setAiNext(true);
            console.log("current player :" + currentPlayer);
        }
    };


    const getComputerMove = (board) => {
        const emptySquares = [];
        for (let i = 0; i < board.length; i++) {
            if (!board[i]) {
                console.log("valid move for computer " + i)
                emptySquares.push(i);
            }
        }

        if (emptySquares.length === 0 || currentPlayer !== 'O') {
            console.log("length is zero or player is wrong")
            return null;
        }

        return emptySquares[Math.floor(Math.random() * emptySquares.length)];
    };


    const checkForWin = (board) => {
        for (const combination of winningCombinations) {
            if (board[combination[0]] && board[combination[0]] === board[combination[1]] && board[combination[1]] === board[combination[2]]) {
                return true;
            }
        }
        return false;
    };

    const resetGame = () => {
        setBoard(new Array(9).fill(null));
        setCurrentPlayer('X');
        setGameOver(false);
        setWinner(null);
    };

    const renderSquare = (index) => {
        return (
            <button className="square" onClick={() => handleClick(index)}>
                {board[index]}
            </button>
        );
    };

    return (
        <div className="game">
            {gameOver && (
                <div className="game-over">
                    {winner ? `Player ${winner} wins!` : 'It\'s a tie!'}
                    <button onClick={resetGame}>Reset Game</button>
                </div>
            )}
            <div className="board">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            {gameOver && <div className="game-over">{winner} wins!</div>}
        </div>
    );
}

export default TicTacToe;
