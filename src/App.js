import './css/main.css';
import ButtonContainer from './components/ButtonContainer';
import SwitchContainer from './components/SwitchContainer';
import { StateProvider } from './AppContext';

const App = () => {

  return (
    <StateProvider>
      <div className="app h-screen flex flex-col items-center justify-center">
        <div className='container bg-neutral-200 flex flex-col-reverse border-4 border-double border-slate-600 rounded-md justify-between md:flex-row lg:mx-1/2'>
          <ButtonContainer />
          <SwitchContainer />
        </div>
      </div>
    </StateProvider>
  );
}

export default App;
