import {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getTrafficState, setTrafficState, resetTrafficState } from "@/store/traffic"

const initialLightOrder = [[0,0,3], [1,0,0], [1,0,0], [1,0,0]];
const readyLightOrder = [[0,2,0], [1,0,0], [0,2,0], [1,0,0]];
const finalLightOrder = [[1,0,0], [1,0,0], [0,0,3], [1,0,0]];
const lightOrders = [{time: 10000, order: initialLightOrder}, {time: 5000, order: readyLightOrder}, {time: 10000, order: finalLightOrder}];
let init = 0;
let timeout;

const useTrafficLight = () => {
    const dispatch = useDispatch();
  const {currentState, duration, direction} = useSelector(getTrafficState);
//   console.log(duration, currentState);
  
  useEffect(() => {
    duration > 0 && updateCurrentState()
  }, [duration])

  const start = () => {
    dispatch(setTrafficState({currentState: lightOrders[init].order, duration: lightOrders[init].time, direction: 'asc'}))
  }

  const updateCurrentState = () => {
    timeout = setTimeout(() => {
    //   console.log("What is direction? ", direction)
      let newDirection = direction;
      if(newDirection === 'asc'){
        init++;
        // console.log("init ", init)
        if(init == 2){
          newDirection = 'desc';
        }
      }else{
        init--;
        if(init == 0){
          newDirection = 'asc';
        }
      }
      dispatch(setTrafficState({currentState: lightOrders[init].order, duration: lightOrders[init].time, direction: newDirection}))}, duration);
  }

  const reset = () => {
    clearTimeout(timeout);
    dispatch(resetTrafficState());
    init = 0;
  }
  return [
    currentState,
    duration,
    start,
    reset
  ]
}

export default useTrafficLight