import React from 'react';
import Controls from './Controls';
import { connect } from 'react-redux';
import Value from './Value';
import * as actions from '../../redux/counter/counter-actions';
import './Counter.css';

function Counter({ value, step, onIcrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />

      <Controls
        step={step}
        onIncrement={() => onIcrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}
const mapStateProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIcrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Counter);

//class Counter extends Component {
//static defaultProps = {
//initialValue: 0,
//};

//state = {
//value: this.props.initialValue,
//};

//handleIncrement = () => {
//this.setState(({ value }) => ({
//value: value + 1,
//}));
//};

//handleDecrement = () => {
// this.setState(({ value }) => ({
// value: value - 1,
//}));
//};

//render() {
//const { value } = this.state;
