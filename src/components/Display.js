import { useAppState } from '../AppContext';

const Display = () => {
  const state = useAppState();
  
  return(
    <div id='display'
            className='flex flex-col border-double border-2 border-stone-700 rounded-sm bg-slate-400 text-stone-200 w-1/2 h-1/5 text-center justify-center font-bold'
          >
            {state.display}
          </div>
  )
};

export default Display;
