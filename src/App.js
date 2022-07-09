import { createContext, useState } from 'react';
import './css/main.css';
import ButtonContainer from './components/ButtonContainer';
import SwitchContainer from './components/SwitchContainer';
import { appState } from './state';

export const StateContext = createContext(appState);

const App = () => {

  const [state, setState] = useState(appState)

  const togglePower = () => {
    return state.power === 'ON' ?
      setState(prev => ({ ...prev, power: 'OFF' })) :
      setState(prev => ({ ...prev, power: 'ON' }))
  }

  const toggleBank = () => {
    return state.bank === 'ON' ?
      setState(prev => ({ ...prev, bank: 'OFF' })) :
      setState(prev => ({ ...prev, bank: 'ON' }))
  }

  return (
    <StateContext.Provider value={state}>
      <div className="app h-screen flex flex-col items-center justify-center">
        <div className='container bg-neutral-200 flex flex-col-reverse border-4 border-double border-slate-600 rounded-md justify-between md:flex-row lg:mx-1/2'>
          <ButtonContainer />
          <SwitchContainer 
          togglePower={togglePower}
          toggleBank={toggleBank}
          />
        </div>
      </div>
    </StateContext.Provider>
  );
}

export default App;
