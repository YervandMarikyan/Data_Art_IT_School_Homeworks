import React from "react";
import { SquareProps } from './interface'
import './index.scss';

const Square: React.FC<SquareProps> = ({value, onSquareClick}) => {    
    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
};

export default Square;