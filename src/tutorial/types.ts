export type squareType = {
  key: number,
  territory: string
}

export type stateType = {
  winner: string,
  player: string,
  squares: squareType[]
}

export type actionType = Readonly<{
  type: 'x' | 'y' | 'win',
  key?: number,
  winner: string
}>
