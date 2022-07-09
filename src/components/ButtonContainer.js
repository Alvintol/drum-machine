import { useAppState } from '../AppContext';
import Button from './Button';
import {heaterKit, pianoKit } from './ButtonKits';

const ButtonContainer = () => {

  const state = useAppState();
  const kit = state.bank === 'Heater' ? heaterKit : pianoKit;
  
  

  const buttons = kit.map((btn) => {

    const {keyTrigger } = btn;

    
    return (
      <Button
      key={keyTrigger}
      btn={btn}
      />
    )
  })


  return (
    <div
      id='button-container'
      className='grid grid-cols-3 grid-rows-3 gap-3 p-1 md:w-1/2'>
      {buttons}
    </div>)
};

export default ButtonContainer;