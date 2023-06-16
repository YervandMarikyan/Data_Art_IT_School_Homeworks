export interface BoardProps {
    xIsNext: boolean;
    squares: string[];
    onPlay: (i: string[]) => void;
}