import {useContext} from 'react';
import {PlayerContext} from './App';

export const Square = (props: {num: number, territory: string}) => {
    const {num, territory} = props;
    const {state, dispatch} = useContext(PlayerContext);

    const handleClick = () => {
        if (state.winner === '' && territory === '' && (state.player === 'x' || state.player === 'y')) {
            dispatch({type: state.player, key: num, winner: ''});
        }
    }

    return (
        <button className="square" onClick={handleClick}>{territory}</button>
    )
}
