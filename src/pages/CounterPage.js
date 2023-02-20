
import Button from '../components/Button'
import produce from 'immer';
// import useCounterAndLog from '../hooks/useCounter';
import { useReducer, useEffect } from 'react'
import Panel from '../components/Panel'

const INCREMENT_TYPE = 'increment';
const INCREMENT_TYPE_DOWN = 'decrement';
const SET_VALUE_TO_ADD = 'change-value-to-add'
const SUBMIT = 'handle-submit'


const reducer = (state, action) => {


  switch(action.type){
    case INCREMENT_TYPE:
      // return {
      //   ...state,
      //   count: state.count + 1
      // }
      state.count = state.count+1;
      return;
    case SET_VALUE_TO_ADD:
      // return {
      //   ...state,
      //   valueToAdd: action.payload
      // };
      state.valueToAdd = action.payload;
      return;
    case INCREMENT_TYPE_DOWN:
      // return{
      //   ...state,
      //   count: state.count - 1
      // }
      state.count = state.count-1;
      return;
    case SUBMIT:
      // return{
      //   ...state,
      //   count: state.count+state.valueToAdd,
      //   valueToAdd: 0
      // }
      state.count = state.count+state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      
      return;


  }

 

}
function CounterPage({ initialCount }) {
  // const {count, handleClick} = useCounterAndLog(initialCount);

  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValuetoAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
  })
  useEffect(() => {
    console.log(state.count);
  }, [state.count])

  function increment() {
    //setCount(count+1);
    dispatch({
      type: INCREMENT_TYPE,
      
    });
  }
  function decrement() {
    //setCount(count-1);
    dispatch({
      type: INCREMENT_TYPE_DOWN,
      
    });
  }

  function handleChange(event) {
    const value = parseInt(event.target.value) || 0;
    console.log(value);
    // setValuetoAdd(value);
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    //setCount(count+valueToAdd);
    //setValuetoAdd(0);

    dispatch({
      type: SUBMIT,
      
    })
  }
  return (
    <Panel className='m-3'>
      <h1 className='text-lg'>Count is {state.count}</h1>


      <div className='flex flex-row'>
        <Button onClick={increment}>
          Increment
        </Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>

        <label>Add a lot!</label>
        <input type='number' value={state.valueToAdd || ""} onChange={handleChange} className='p-1 m-3 bg-gray-50 border border-gray-300' />

        <Button>Add it !</Button>


      </form>
    </Panel>
  )
}

export default CounterPage;