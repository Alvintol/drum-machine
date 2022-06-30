import './css/main.css';

const App = () => {
  return (
    <div className="app">
      main body
      <div id='left-container flex-row flex-wrap'>
        <div className='drum-btn bg-red-500'>
          Button1
        </div>
        <div className='drum-btn'>
          Button2
        </div>
        <div className='drum-btn'>
          Button3
        </div>
        <div className='drum-btn'>
          Button4
        </div>
        <div className='drum-btn'>
          Button5
        </div>
        <div className='drum-btn'>
          Button6
        </div>
        <div className='drum-btn'>
          Button7
        </div>
        <div className='drum-btn'>
          Button8
        </div>
        <div className='drum-btn'>
          Button9
        </div>
      </div>
      <div id='right-container flex-col'>
        <div className='drum-btn' id='power'>
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
        <div className='drum-btn' id='bank'>
          bank?
        </div>
      </div>
    </div>
  );
}

export default App;
