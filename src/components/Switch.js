const Switch = ({id}) => {

  return (
    <div 
    id={id}
    onClick={()=>console.log('CLICKED:', id)}
    >
      <div className='flex flex-row text-sm text-bold w-20 h-8 justify-start border-solid border-2 border-stone-400 rounded-sm bg-slate-600'>
        <div className='p-1 align-center border-solid border-2 border-stone-300 rounded-sm bg-slate-600 text-stone-200'>
          ON
        </div>
      </div>
    </div>
  )
};

export default Switch;