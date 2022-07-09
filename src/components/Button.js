const Button = ({btn, displayButton}) => {
  
  const {keyCode, keyTrigger, id, url} = btn;
  
  return (

    <div 
    className='text-center flex flex-col justify-center font-bold text-stone-600 bg-emerald-400 border rounded-sm border-black w-32 h-32 shadow-2xl'
    onClick={() => displayButton(id)}
    >
      {keyTrigger}
    </div>
  )
};

export default Button;