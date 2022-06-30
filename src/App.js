import '../src/css/main.css';

const App = () => {

  const button = 'px-6 py-6 m-1 text-center shadow-xl'

  return (
    <div className="app h-screen flex flex-col items-center justify-center">

      <div className='container flex flex-col-reverse md:flex-row'>
        <div id='left-container' className='grid gap-3 grid-cols-3 grid-rows-3"'>
          <div className={button}>
            Button1
          </div>
          <div className={button}>
            Button2
          </div>
          <div className={button}>
            Button3
          </div>
          <div className={button}>
            Button4
          </div>
          <div className={button}>
            Button5
          </div>
          <div className={button}>
            Button6
          </div>
          <div className={button}>
            Button7
          </div>
          <div className={button}>
            Button8
          </div>
          <div className={button}>
            Button9
          </div>
        </div>
        <div id='right-container flex-col'>
          <div id='power'>
            power
          </div>
          <div id='display'>
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
