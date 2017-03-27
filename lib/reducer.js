export const reducer = (state = { lastUpdate: 0, light: false, my: 'my rules' }, action) => {
  switch (action.type) {
    case 'TICK': return { lastUpdate: action.ts, light: !!action.light }
    default: return state
  }
}
