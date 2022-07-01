import './css/main.css';
import ButtonContainer from './components/ButtonContainer';
import Display from './components/Display';
import Switch from './components/Switch';
import Slider from './components/Slider';

const App = () => {

  return (
    <div className="app h-screen flex flex-col items-center justify-center">
      <div className='container flex flex-col-reverse border-4 rounded-md  md:flex-row lg:mx-1/2'>
        <ButtonContainer />
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
      </div>
    </div>
  );
}

export default App;
