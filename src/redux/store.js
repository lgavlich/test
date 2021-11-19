import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;

//const counterInitalState = {
//  value: 10,
//  step: 15,
//};

//const valueReducer = (state = 10, { type, payload }) => {
// switch (type) {
//   case 'counter/Increment':
//   return state + payload;
//  default:
//    return state;
//}
//};

//const stepReducer = (state = 5, action) => state;

//const counterReducer = combineReducers({
//  value: valueReducer,
//  step: stepReducer,
//});

//const initalState = {
//counter: {
//  value: 10,
// step: 15,
//},
//};

//const reducer = (state = initalState, { type, payload }) => {
//switch (type) {
//case 'counter/Increment':
//return {
//...state,
//counter: {
//...state.counter,
//value: state.counter.value + payload,
//},
//};

//case 'counter/Decrement':
//   return {
//   ...state,
// counter: {
//     ...state.counter,
//   value: state.counter.value - payload,
//  },
//};
// default:
// return state;
//}
//};
