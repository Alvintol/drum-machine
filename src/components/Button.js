import { useAppState, useDisplayUpdate } from '../AppContext';
import { useKey } from '../UseKey';


const Button = ({ btn }) => {

  const state = useAppState();
  const displayButton = useDisplayUpdate();
  const { keyCode, keyTrigger, id, url } = btn;

  const handleClick = () => state.power === 'ON' ? displayButton(id) : null;


  useKey(`Key${keyTrigger}`, (e) => {
    if (e.key === keyTrigger.toLowerCase()) {
      console.log('event:', e.key)
    }
  })

  return (

    <div
      className='text-center flex flex-col justify-center font-bold text-stone-600 bg-emerald-400 border rounded-sm border-black w-32 h-32 shadow-2xl'
      onClick={() => handleClick()}
    >
      {keyTrigger}
    </div>
  )
};

export default Button;