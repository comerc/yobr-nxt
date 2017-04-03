import { createAction, createReducer } from 'redux-act'

const initialState = []

const NS = '@@posts/'

const set = createAction(`${NS}SET`);

export const actions = {
  fetch: () => (dispatch, getState) => {
    if (!process.browser) {
      const posts = require('data/posts').default
      if (posts) {
        dispatch(set(posts))
      }
    }
    return Promise.resolve()
  },
}

const reducer = createReducer({
  [set]: (state, posts) => posts.slice(),
}, initialState)

export default reducer
