import './App.css';
import Header from './components/Header.jsx'
import TempDash from './components/TempDash.jsx'
import WeatherInfo from './components/WeatherInfo.jsx'
import Forecast from './components/Forecast';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-5">
            <TempDash />
          </div>
          <div className="col-4 row align-items-center">
            <WeatherInfo/>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <Forecast />
        </div>
      </div>
    </div>
  );
}

export default App;