import { useAppState, useVolumeUpdate } from '../AppContext';

const Slider = ({ id }) => {

  const state = useAppState();
  const updateVolume = useVolumeUpdate();

  return (
    <div id={id} className='flex flex-col mt-3 outline-hidden'>
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