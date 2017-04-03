import React, { Component, PropTypes } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from 'ducks'

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

// const composeWithStore = Page => {
//   if (!store) {
//     store = getStore()
//   }
//   const WithStore = props => (
//     <Provider store={store}>
//       <Page {...props} />
//     </Provider>
//   )
//   WithStore.getInitialProps = async ctx => {
//     if (!process.browser) {
//       store = getStore()
//     }
//     ctx.store = store
//     const props = Page.getInitialProps
//       ? await Page.getInitialProps(ctx)
//       : {}
//     return props
//   }
//   return WithStore
// }

export const connectPage = (mapStateToProps, mapDispatchToProps, mergeProps, options) => (Page) =>
  composeWithStore(connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Page))
