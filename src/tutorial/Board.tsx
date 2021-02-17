import {useContext} from 'react';
import {PlayerContext} from './App';
import {Square} from './Square';
import {squareType} from './types'

export const Board: React.FC = () => {
    const {player, squares, winner} = useContext(PlayerContext).state;
    const _squares: Array<squareType[]> = [[],[],[]] ;

    squares.forEach((square, index) => {
        if (index < 3) {
            _squares[0].push(square);
        } else if (index < 6) {
            _squares[1].push(square);
        } else if (index < 9) {
            _squares[2].push(square);
        }
    });

    const Row = (props: {row: squareType[]}) => {
        const {row} = props;
        return (
            <div className="board-row">
                {row.map(square => <Square key={square.key} num={square.key} territory={square.territory} />)}
            </div>
        )
    }

    return (
        <div>
            <div className="status">{`Next player: ${player}`}</div>
            {winner ? <div className="status">{`Winner: ${winner}`}</div> : ''}
            {_squares.map((row, index) => <Row row={row} key={index} />)}
        </div>
    )
}
