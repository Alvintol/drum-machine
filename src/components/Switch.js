import { useAppState, usePowerUpdate, useBankUpdate } from '../AppContext';

const Switch = ({ id }) => {
  const state = useAppState();
  const toggleBank = useBankUpdate();
  const togglePower = usePowerUpdate();

  const mainClass = 'flex flex-row text-sm text-bold w-20 h-8 border-solid border-2 border-stone-400 rounded-sm bg-slate-600'

  const powerBtn = state.power === 'ON' ? `${mainClass} justify-start`: `${mainClass} justify-end`;
  const bankBtn = state.bank === 'Heater' ? `${mainClass} justify-start`: `${mainClass} justify-end`;

  return (
    <div
      id={id}
      onClick={id === 'power' ? togglePower : toggleBank}
    >
      <div className={id === 'power' ? powerBtn : bankBtn}>
        <div className='p-1 align-center border-solid border-2 border-stone-400 rounded-sm bg-slate-600 text-stone-200'>
          {id === 'power' ? state.power : state.bank}
        </div>
      </div>
    </div>
  )
};

export default Switch;