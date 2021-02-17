import {createContext, useEffect, useReducer} from 'react';

import {Board} from './Board';
import {actionType, stateType, squareType} from './types'
import './index.css';

const initialState: stateType = {
    winner: '',
    player: 'x',
    squares: [
        {
            key: 1,
            territory: ''
        },
        {
            key: 2,
            territory: ''
        },
        {
            key: 3,
            territory: ''
        },
        {
            key: 4,
            territory: ''
        },
        {
            key: 5,
            territory: ''
        },
        {
            key: 6,
            territory: ''
        },
        {
            key: 7,
            territory: ''
        },
        {
            key: 8,
            territory: ''
        },
        {
            key: 9,
            territory: ''
        },
    ],
}

const reducer = (state: stateType, action: actionType) => {
    const {type} = action;

    switch (type) {
        case 'x':
        case 'y':
            const targetSquare = state.squares.find(square => square.key === action.key);
            if (type === 'x') {
                targetSquare!.territory = 'x';
                return {
                    ...state,
                    player: 'y'
                }
            }
            targetSquare!.territory = 'y';
            return {
                ...state,
                player: 'x'
            }
        case 'win':
            return {
                ...state,
                winner: action.winner
            }
        default:
            return state;
    }
}

const getWinner = (squares: squareType[]): string | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a].territory && squares[a].territory === squares[b].territory && squares[a].territory === squares[c].territory) {
        return squares[a].territory;
      }
    }
    return null;
}

export const PlayerContext = createContext({} as {
    state: stateType,
    dispatch: React.Dispatch<actionType>
});

export const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        const winner = getWinner(state.squares);
        if (winner) {
            dispatch({type: 'win', winner});
        }
    }, [state.player]);

    return (
        <PlayerContext.Provider value={{state, dispatch}}>
            <div className="game">
                <div className="game-board">
                <Board />
                </div>
            </div>
        </PlayerContext.Provider>
    );
  }
