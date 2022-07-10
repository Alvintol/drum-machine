import { useAppState, useDisplayUpdate } from '../AppContext';
import { useKey } from '../EventListeners';


const Button = ({ btn }) => {

  const state = useAppState();
  const displayButton = useDisplayUpdate();
  const { keyTrigger, id, url } = btn;

  const primaryClass = 'text-center flex flex-col justify-center font-bold text-stone-600  border rounded-sm border-black w-32 h-32 shadow-2xl'

  const onBtn = primaryClass + ' bg-orange-300'
  const offBtn = primaryClass + ' bg-emerald-400'

  let btnClass = offBtn;

  const handleClick = () => {
    if (state.power === 'ON') {
      displayButton(id)
    }
  }
  const classChange = (event) => {
    console.log(event.type)
  }

  useKey(`Key${keyTrigger}`, (e) => {
    if (e?.key === keyTrigger.toLowerCase()) {
      displayButton(id)
      classChange(e)
    }
  })


  
  return (

    <div
      className={btnClass}
      onClick={() => handleClick()}
      onMouseDown={classChange}
      onMouseUp={classChange}
    >
      {keyTrigger}
    </div>
  )
};

export default Button;