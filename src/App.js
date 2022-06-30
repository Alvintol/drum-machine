import '../src/css/main.css';

const App = () => {
  return (
    <div className="app">
      main body
      <div id='left-container' className='grid gap-3 grid-cols-3 grid-rows-3"'>
        <div className='px-6 py-6 m-1 text-center drop-shadow'>
          Button1
        </div>
        <div className=''>
          Button2
        </div>
        <div className=''>
          Button3
        </div>
        <div className=''>
          Button4
        </div>
        <div className=''>
          Button5
        </div>
        <div className=''>
          Button6
        </div>
        <div className=''>
          Button7
        </div>
        <div className=''>
          Button8
        </div>
        <div className=''>
          Button9
        </div>
      </div>
      <div id='right-container flex-col'>
        <div className='' id='power'>
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
        <div className='' id='bank'>
          bank?
        </div>
      </div>
    </div>
  );
}

export default App;
