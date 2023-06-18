import Square from '../Square';
import CalculateWinner from './CalculateWinner';
import { BoardProps } from "./interface";
import './index.scss';

import React, { FC } from "react";
const Board: FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
    function handleClick(i: number) {
        if (squares[i] || CalculateWinner(squares)) {
            return;
        }
        const nextSquares: string[] = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        onPlay(nextSquares);
    }

    const winner: string | null = CalculateWinner(squares);
    const status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O");

    const createSquare = (i: number) => (
        <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
      );

    return (
        <>
            <div className="status">{status}</div>
            {[0, 3, 6].map(index => (
                <div className="board-row" key={index}>
                    {createSquare(index)}
                    {createSquare(index+1)}
                    {createSquare(index+2)}
                </div>
            ))}
        </>
    );
};

export default Board;