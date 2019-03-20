import React from 'react'
import { connect } from 'react-redux'
import { serverRenderClock, startClock } from '../../redux/reducer/clock'
import styles from './styles.scss'

class Clock extends React.Component {
  // static getInitialProps({ serverRenderClockAct, req }) {
  //   const isServer = !!req
  //   serverRenderClockAct(isServer)
  //   return {}
  // }

  componentDidMount() {
    const { startClockAct, light } = this.props
    this.timer = setInterval(() => startClockAct({ light: !light }), 1000)
  }

  componentWillMount() {
    clearInterval(this.timer)
  }

  render() {
    const { lastUpdate, light } = this.props
    return (
      <div className={`${styles.root} ${light ? styles.light : ''}`}>
        {format(new Date(lastUpdate))}
      </div>
    )
  }
}

const format = t => `${pad(t.getHours())}:${pad(t.getMinutes())}:${pad(t.getSeconds())}`

const pad = n => (n < 10 ? `0${n}` : n)

const mapStateToProps = state => ({
  lastUpdate: state.clock.lastUpdate,
  light: state.clock.light,
})

const mapDispatchToProps = {
  serverRenderClockAct: serverRenderClock,
  startClockAct: startClock,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Clock)
