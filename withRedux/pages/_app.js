import React from 'react'
import NextApp, { Container } from 'next/app'
import withReduxStore from './../redux/withReduxStore'
import { Provider } from 'react-redux'

class App extends NextApp {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    console.log('renderApp')
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(App)
