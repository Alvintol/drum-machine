import Display from '../components/Display';
import Switch from '../components/Switch';
import Slider from '../components/Slider';

const SwitchContainer = ({togglePower, toggleBank, updateVolume}) => {
  return (
    <div
      id='switch-container'
      className='flex flex-col justify-around items-center h-64 md:w-1/2 md: h-full'>
      <Switch
        id='power'
        togglePower={togglePower}
      />
      <Display />
      <Slider
        id='volume'
        updateVolume={updateVolume}
      />
      <Switch
        id='bank'
        toggleBank={toggleBank}
      />
    </div>
  )
};

export default SwitchContainer;