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

  const togglePower = () => {
    if (state.power === 'ON') {
      setState(prev => ({ ...prev, power: 'OFF' }))
    } else {
      setState(prev => ({ ...prev, power: 'ON' }))
      displayButton('Power: ON')
    }
  }


  const toggleBank = async () => {
    if (state.bank === 'Heater') {
      setState(prev => ({ ...prev, bank: 'Piano' }))
      displayButton('Piano Kit')
    } else {
      setState(prev => ({ ...prev, bank: 'Heater' }));
      displayButton('Heater Kit')
    }
  }
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