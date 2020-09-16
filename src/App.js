import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // useDispatch - gives us the ability to dispatch an action
import { increment, decrement, signIn } from './actions/index';



function App() {
  const counter = useSelector(state => state.counterReducer);
  const logged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();
  // console.log(logged)
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={()=>dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br/>
      <button onClick={() => dispatch(signIn())} style={{marginTop:'2em'}}>Click Here to Sign In</button>
      {logged ? 
        <h3>Valuable Information I shouldn't see</h3>
        :
        null
      }
      
    </div>
  );
}

export default App;
