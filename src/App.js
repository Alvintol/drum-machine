import '../src/css/main.css';

const App = () => {

  const button = 'px-6 py-6 m-1 text-center shadow-xl'

  return (
    <div className="app h-screen flex flex-col items-center justify-center">
      <div className='container flex flex-col-reverse border-4 rounded-md  md:flex-row lg:mx-1/2'>
        <div id='button-container' className='grid gap-3 grid-cols-3 grid-rows-3 p-6 md:w-1/2'>
          <div className='px-6 py-6 m-1 text-center shadow-xl'>
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
        <div id='switch-container' className='flex flex-col justify-around items-center h-64 md:w-1/2 md: h-full'>          <div id='power'>
          <div className='flex flex-row text-sm text-bold w-20 h-8 justify-start'>
            <div className='p-1 align-center'>
              ON
            </div>
          </div>
        </div>
          <div id='display'
            className='flex flex-col w-1/2 h-1/5 text-center justify-center font-bold'
          >
            display
          </div>
          <div id='slider'>
            <input
              min='0'
              max='1'
              step='0.01'
              type='range'
            />
          </div>
          <div id='bank'>
            <div className='flex flex-row text-sm text-bold w-20 h-8 justify-start'>
              <div className='p-1 align-center'>
                ON
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
