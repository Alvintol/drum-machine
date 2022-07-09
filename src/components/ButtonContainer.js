import Button from './Button';
const ButtonContainer = ({displayButton}) => {

  const array = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const buttons = array.map((btn, i) => {
    return (
      <Button
      key={i}
      id={btn}
      displayButton={displayButton}
      />
    )
  })


  return (
    <div
      id='button-container'
      className='grid grid-cols-3 grid-rows-3 gap-3 p-1 md:w-1/2'>
      {buttons}
    </div>)
};

export default ButtonContainer;