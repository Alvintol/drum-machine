import './css/main.css';
import ButtonContainer from './components/ButtonContainer';
import Display from './components/Display';
import Switch from './components/Switch';
import Slider from './components/Slider';
import SwitchContainer from './components/SwitchContainer';

const App = () => {

  return (
    <div className="app h-screen flex flex-col items-center justify-center">
      <div className='container flex flex-col-reverse border-4 rounded-md  md:flex-row lg:mx-1/2'>
        <ButtonContainer />
        <SwitchContainer />
      </div>
    </div>
  );
}

export default App;
