import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {actions} from './store/index';
function App() {
 
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(actions.increment());
  }
  const handleDecrement = () =>{
    dispatch(actions.decrement())
  }
  const addBy = ()=>{
    dispatch(actions.addBy(10));
  }

  const subBy = ()=>{
    dispatch(actions.subBy(10));
  }
  return (
    <div className="App">
      <h1>Counter : <span className= {counter <0 ? "danger" : "success"}>&nbsp;{counter}</span></h1>
      <button className='btn btn-inc' onClick={handleIncrement}>Increment</button> &nbsp;
      <button className='btn btn-dec' onClick={handleDecrement}>Decrement</button>  &nbsp;
      <button className='btn btn-add' onClick={addBy}>Add By 10</button>  &nbsp;
      <button className='btn btn-sub' onClick={subBy}>Subtract By 10</button>  &nbsp;
    </div>
  );
}

export default App;