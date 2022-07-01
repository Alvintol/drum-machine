const Slider = ({ id }) => {

  return (
    <div id={id}>
      <input
        min='0'
        max='1'
        step='0.01'
        type='range'
      />
    </div>
  )
};

export default Slider;