import {useSelector, useDispatch} from 'react-redux'
import { decrement, increas, increment } from './CounterSlice';


const Counter = () => {
  const count = useSelector((state)=>state.counter.count);
  const themeTextColor = useSelector((state)=>state.theme.color);
  const dispatch = useDispatch();


  return (
    <div>
        <button className='button' aria-label='Decrement' onClick={()=>dispatch(decrement())}> - </button>
        <span className='value' style={{color:themeTextColor}}>Count: {count}</span>
        <button className='button' aria-label='Increment' onClick={()=>dispatch(increment())}> + </button> 
        <button className='button'  onClick={()=>dispatch(increas(10))}> Increas By 10 </button>
    </div>
  )
}

export default Counter