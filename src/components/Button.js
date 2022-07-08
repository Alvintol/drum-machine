const Button = ({id}) => {
  
  return (
    <div 
    className='text-center flex flex-col justify-center font-bold text-stone-200 bg-emerald-400 border rounded-sm border-black w-32 h-32 shadow-xl'
    onClick={() => console.log('CLICKED:', id)}
    >
      {id}
    </div>
  )
};

export default Button;