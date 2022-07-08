const Button = ({id}) => {
  
  return (
    <div 
    className='text-center font-bold text-stone-200 border rounded-sm border-black w-32 h-32 m-0.5 shadow-xl'
    onClick={() => console.log('CLICKED:', id)}
    >
      {id}
    </div>
  )
};

export default Button;