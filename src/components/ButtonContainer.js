import Button from './Button';
const ButtonContainer = () => {

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const buttons = array.map((btn, i) => {
    return (
      <Button
      key={i}
      id={btn}
      />
    )
  })


  return (
    <div
      id='button-container'
      className=''>
      {buttons}
    </div>)
};

export default ButtonContainer;