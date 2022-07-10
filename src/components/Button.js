import { useState } from 'react';
import { useAppState, useDisplayUpdate } from '../AppContext';
import { useKey } from '../EventListeners';
import { Howl, Howler } from 'howler';


const Button = ({ btn }) => {

  const state = useAppState();
  const displayButton = useDisplayUpdate();
  const { keyTrigger, id, url } = btn;

  const offBtn = ' bg-emerald-400 w-32 h-32';
  const onBtn = ' bg-orange-300 w-28 h-28 self-center';
  const primaryClass = 'text-center flex flex-col justify-center justify-self-center font-bold text-stone-600 border rounded-sm border-black shadow-2xl '


  const [btnClass, setBtnClass] = useState(primaryClass + offBtn);
  const sound = new Howl({
    src: [url],
    volume: state.volume
  });
  
    console.log('URL:', url)
  
  const handleClick = () => {
    if (state.power === 'ON') {
      displayButton(id)
      sound.play();
      console.log('SRC:', sound.src)
    }
  };


  const classChange = (event) => {
    if (event.type === 'mousedown' ||
      event.type === 'keydown') {
      setBtnClass(primaryClass + onBtn)
    }
    if (event.type === 'mouseup' ||
      event.type === 'keyup') {
      setBtnClass(primaryClass + offBtn)
    }
  };

  useKey(`Key${keyTrigger}`, (e) => {
    if (e?.key === keyTrigger.toLowerCase()) {
      displayButton(id)
      classChange(e)
    }
  });

  return (
    <div
      className={btnClass}
      onClick={() => handleClick()}
      onMouseDown={(e) => classChange(e)}
      onMouseUp={(e) => classChange(e)}
    >
      {keyTrigger}
    </div>
  )
};

export default Button;