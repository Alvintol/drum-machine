import './main.css';

function App() {
  return (
    <div className="app">
      main body
      <div id='left-container'>
        main container
        <button>
          Button1
        </button>
        <button>
          Button2
        </button>
        <button>
          Button3
        </button>
        <button>
          Button4
        </button>
        <button>
          Button5
        </button>
        <button>
          Button6
        </button>
        <button>
          Button7
        </button>
        <button>
          Button8
        </button>
        <button>
          Button9
        </button>
      </div>
      <div id='right-container'>
        <button id='power'>
          power
        </button>
        <div id='display'>
          display
          <div>
            screen
          </div>
        </div>
        <div id='slider'>
          slider
        </div>
        <button id='bank'>
          bank?
        </button>
      </div>
    </div>
  );
}

export default App;
