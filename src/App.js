import { createContext, useState } from 'react';
import './css/main.css';
import ButtonContainer from './components/ButtonContainer';
import SwitchContainer from './components/SwitchContainer';
import { appState } from './state';

const App = () => {

  const StateContext = createContext();

  const [state, setState] = useState({appState})

  return (
    <StateContext.Provider value={state}>
      <div className="app h-screen flex flex-col items-center justify-center">
        <div className='container flex flex-col-reverse border-4 rounded-md  md:flex-row lg:mx-1/2'>
          <ButtonContainer />
          <SwitchContainer />
        </div>
      </div>
    </StateContext.Provider>
  );
}

export default App;
