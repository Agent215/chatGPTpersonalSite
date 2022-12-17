import React, { useState } from 'react';

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

    const handleClick = (index, player) => {
        if (board[index] || gameOver || (player === 'O')) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        if (checkForWin(newBoard)) {
            setGameOver(true);
            setWinner(currentPlayer);
            return;
        }

        handleX(newBoard);
    
    };

    const handleX =(board) =>{
        if (currentPlayer === 'X') {
            setCurrentPlayer('O');
            setTimeout(() => {
                const computerMove = getComputerMove(board);
                if (computerMove !== null) {
                    handleClick(computerMove, 'O');
                }
            }, 500);
        } else {
            setCurrentPlayer('X');
        }
    }
    const getComputerMove = (board) => {
        const emptySquares = [];
        for (let i = 0; i < board.length; i++) {
            if (!board[i]) {
                emptySquares.push(i);
            }
        }
        if (emptySquares.length === 0) return null;
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
