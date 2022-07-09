import { appState } from './state';
import { createContext, useState, useContext } from 'react';

const StateContext = createContext(appState);
const PowerUpdateContext = createContext();
const BankUpdateContext = createContext();
const DisplayUpdateContext = createContext();
const VolumeUpdateContext = createContext();
export const useAppState = () => useContext(StateContext);
export const usePowerUpdate = () => useContext(PowerUpdateContext);
export const useBankUpdate = () => useContext(BankUpdateContext);
export const useDisplayUpdate = () => useContext(DisplayUpdateContext);
export const useVolumeUpdate = () => useContext(VolumeUpdateContext);

export const StateProvider = ({ children }) => {

  const [state, setState] = useState(appState);

  const togglePower = () =>
    state.power === 'ON' ?
      setState(prev => ({ ...prev, power: 'OFF' })) :
      setState(prev => ({ ...prev, power: 'ON' }));


  const toggleBank = () =>
    state.bank === 'Heater' ?
      setState(prev => ({ ...prev, bank: 'Piano' })) :
      setState(prev => ({ ...prev, bank: 'Heater' }));

  const displayButton = (id) => setState(prev => ({ ...prev, display: id }));

  const updateVolume = (volume) => setState(prev => ({ ...prev, volume: volume }))

  return (
    <StateContext.Provider value={state}>
      <PowerUpdateContext.Provider value={togglePower}>
        <BankUpdateContext.Provider value={toggleBank}>
          <DisplayUpdateContext.Provider value={displayButton}>
            <VolumeUpdateContext.Provider value={updateVolume}>
              {children}
            </VolumeUpdateContext.Provider>
          </DisplayUpdateContext.Provider>
        </BankUpdateContext.Provider>
      </PowerUpdateContext.Provider>
    </StateContext.Provider>
  )
};