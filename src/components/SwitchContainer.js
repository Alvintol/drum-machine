import Display from './components/Display';
import Switch from './components/Switch';
import Slider from './components/Slider';

const SwitchContainer = () => {
  return (
    <div id='switch-container' className='flex flex-col justify-around items-center h-64 md:w-1/2 md: h-full'>
      <Switch
        id='power'
      />
      <Display />
      <Slider
        id='volume'
      />
      <Switch
        id='bank'
      />
    </div>
  )
};

export default SwitchContainer;