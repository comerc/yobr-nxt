import React, { Component, PropTypes } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { reducer } from './reducer'

let store = null

const getStore = () => {
  const logger = createLogger()
  return createStore(reducer,
    composeWithDevTools(applyMiddleware(thunk, logger)))
}

const composeWithStore = (Page) => class WithStore extends Component {

  static async getInitialProps (ctx) {
    if (!process.browser) {
      store = getStore()
    }
    ctx.store = store
    const props = Page.getInitialProps
      ? await Page.getInitialProps(ctx)
      : {}
    return props
  }

  constructor () {
    super()
    if (!store) {
      store = getStore()
    }
  }

  render () {
    return (
      <Provider store={store}>
        <Page {...this.props} />
      </Provider>
    )
  }
}

export const connectPage = (mapStateToProps, mapDispatchToProps, mergeProps, options) => (Page) =>
  composeWithStore(connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Page))
