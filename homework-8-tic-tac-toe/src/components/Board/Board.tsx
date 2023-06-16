import Square from '../Square/Square';
import CalculateWinner from './CalculateWinner';
import { BoardProps } from "./interface";
import './index.scss';

const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
    function handleClick(i: number) {
        if (squares[i] || CalculateWinner(squares)) {
            return;
        }
        const nextSquares: string[] = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    const winner: string | null = CalculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    const createSquare = (i: number) => (
        <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
      );

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                {createSquare(0)}
                {createSquare(1)}
                {createSquare(2)}
                {/* <Square value={squares[0]} onSquareClick={() => handleClick(0)} />*/}
            </div>
            <div className="board-row">
                {createSquare(3)}
                {createSquare(4)}
                {createSquare(5)}
            </div>
            <div className="board-row">
                {createSquare(6)}
                {createSquare(7)}
                {createSquare(8)}
            </div>
        </>
    );
};

export default Board;