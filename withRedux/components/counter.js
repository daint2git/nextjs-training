import { connect } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '../redux/reducer/counter'

const Counter = ({ count, incrementAct, decrementAct, resetAct }) => (
  <div>
    <h1>
      Count: <span>{count}</span>
    </h1>
    <button onClick={incrementAct}>increment</button>
    <button onClick={decrementAct}>decrement</button>
    <button onClick={resetAct}>reset</button>
  </div>
)

const mapStateToProps = state => ({
  count: state.counter.count,
})

const mapDispatchToProps = {
  incrementAct: incrementCount,
  decrementAct: decrementCount,
  resetAct: resetCount,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)
