import { useContext } from 'react';
import { StateContext } from '../App';

const Slider = ({ id, updateVolume }) => {

  const state = useContext(StateContext);

  return (
    <div id={id} className='flex flex-col'>
      Volume: {(state.volume * 100).toFixed(0)}%
      <input
        min='0'
        max='1'
        step='0.01'
        type='range'
        value={state.volume}
        onChange={(e) => updateVolume(e.target.value)}
      />
    </div>
  )
};

export default Slider;