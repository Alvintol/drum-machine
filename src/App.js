import '../src/css/main.css';

const App = () => {

  const button = 'px-6 py-6 m-1 text-center shadow-xl'

  return (
    <div className="app h-screen flex flex-col items-center justify-center">
      <div className='container flex flex-col-reverse border-4 rounded-md  md:flex-row lg:mx-1/2'>
        <div id='left-container' className='grid gap-3 grid-cols-3 grid-rows-3 p-6 md:w-1/2'>
          <div className={button}>
            1
          </div>
          <div className={button}>
            2
          </div>
          <div className={button}>
            3
          </div>
          <div className={button}>
            4
          </div>
          <div className={button}>
            5
          </div>
          <div className={button}>
            6
          </div>
          <div className={button}>
            7
          </div>
          <div className={button}>
            8
          </div>
          <div className={button}>
            9
          </div>
        </div>
        <div id='right-container' className='flex flex-col justify-around items-center md:w-1/2'>
          <div id='power'>
            <div className='flex flex-row text-sm text-bold w-20 h-8 justify-start'>
              <div className='p-1 align-center'>
                ON
              </div>
            </div>
          </div>
          <div id='display'
          >
            display
            <div>
              screen
            </div>
          </div>
          <div id='slider'>
            slider
          </div>
          <div id='bank'>
            bank?
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
