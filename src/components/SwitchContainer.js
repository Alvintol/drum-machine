import Display from '../components/Display';
import Switch from '../components/Switch';
import Slider from '../components/Slider';

const SwitchContainer = () => {
  return (
    <div
      id='switch-container'
      className='flex flex-col justify-around items-center my-5 md:w-1/2 md: h-full'>
      <Switch
        id='Power'
      />
      <Display />
      <Slider
        id='Volume'
      />
      <Switch
        id='Bank'
      />
    </div>
  )
};

export default SwitchContainer;