import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!!!</h1>
        <Weather city="Moscow"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
              <p>Coded by <a href="https://github.com/IraCannet/weather-react-app">Ira</a></p>
      </header>
    </div>
  );
}

export default App;
