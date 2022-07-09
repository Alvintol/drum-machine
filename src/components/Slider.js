import { useContext } from 'react';
import { StateContext } from '../App';

const Slider = ({ id }) => {

  const state = useContext(StateContext);

  return (
    <div id={id} className='flex flex-col'>
      Volume: {state.volume * 100}%
      <input
        min='0'
        max='1'
        step='0.01'
        type='range'
      />
    </div>
  )
};

export default Slider;