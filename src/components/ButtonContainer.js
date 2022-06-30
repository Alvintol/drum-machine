import Button from './Button';
const ButtonContainer = () => {
  const buttonClass = 'px-6 py-6 m-1 text-center shadow-xl';

  return (
    <div
      id='button-container'
      className='grid gap-3 grid-cols-3 grid-rows-3 p-6 md:w-1/2'>
      <Button 
      key={1}
      id={1}
      />
      <div className={buttonClass}>
        2
      </div>
      <div className={buttonClass}>
        3
      </div>
      <div className={buttonClass}>
        4
      </div>
      <div className={buttonClass}>
        5
      </div>
      <div className={buttonClass}>
        6
      </div>
      <div className={buttonClass}>
        7
      </div>
      <div className={buttonClass}>
        8
      </div>
      <div className={buttonClass}>
        9
      </div>
    </div>)
};

export default ButtonContainer;