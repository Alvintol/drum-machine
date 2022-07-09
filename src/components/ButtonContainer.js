import Button from './Button';
import {heaterKit, pianoKit } from './ButtonKits';
import { useContext } from 'react';
import { StateContext } from '../App';

const ButtonContainer = ({displayButton}) => {

  const state = useContext(StateContext);
  const kit = state.bank === 'Heater' ? heaterKit : pianoKit;

  const buttons = kit.map((btn, i) => {
    return (
      <Button
      key={i}
      btn={btn}
      displayButton={displayButton}
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