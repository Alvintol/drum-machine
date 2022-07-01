import './css/main.css';
import ButtonContainer from './components/ButtonContainer';


const App = () => {



  return (
    <div className="app h-screen flex flex-col items-center justify-center">
      <div className='container flex flex-col-reverse border-4 rounded-md  md:flex-row lg:mx-1/2'>
        <ButtonContainer />
        <div id='switch-container' className='flex flex-col justify-around items-center h-64 md:w-1/2 md: h-full'>          <div id='power'>
          <div className='flex flex-row text-sm text-bold w-20 h-8 justify-start'>
            <div className='p-1 align-center'>
              ON
            </div>
          </div>
        </div>
         
          <div id='slider'>
            <input
              min='0'
              max='1'
              step='0.01'
              type='range'
            />
          </div>
          <div id='bank'>
            <div className='flex flex-row text-sm text-bold w-20 h-8 justify-start'>
              <div className='p-1 align-center'>
                ON
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
