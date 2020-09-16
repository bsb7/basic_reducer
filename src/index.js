import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; // -Provider - connects our global store or global state to the entire app or depending on which component you wrap it
import { createStore } from 'redux'; 
import allReducer from './reducers/index';


const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// STORE - holds all the  state or data for the applications
          // globalized state


// ACTION - describes what you wanna do  
            // - functions that returns an objects  
//-- action increment
// const increment = () => {
//   return {
//     type:'INCREMENT'
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// REDUCER - describes how your actions transforms the state to the next state
            // if an action is called reducer is gonna check which action you did and
            // based on the action it's gonna modify the store
            // will take care of all the actions 
            // - reducer takes two param 1. initial state, 2. action
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
  
// }

//--add reducer to the  store
//let store = createStore(counter);
//-- display in the  console
//store.subscribe(() => console.log(store.getState()));


// DISPATCH - were we actually execute the action
// store.dispatch(increment());
// store.dispatch(decrement());

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
