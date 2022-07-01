import Button from './Button';
const ButtonContainer = () => {

  return (
    <div
      id='button-container'
      className='grid gap-3 grid-cols-3 grid-rows-3 p-6 md:w-1/2'>
      <Button 
      key={1}
      id={1}
      />
      <Button 
      key={2}
      id={2}
      />
      <Button 
      key={3}
      id={3}
      />
      <Button 
      key={4}
      id={4}
      />
      <Button 
      key={5}
      id={5}
      />
      <Button 
      key={6}
      id={6}
      />
      <Button 
      key={7}
      id={7}
      />
      <Button 
      key={8}
      id={8}
      />
      <Button 
      key={9}
      id={9}
      />
    </div>)
};

export default ButtonContainer;