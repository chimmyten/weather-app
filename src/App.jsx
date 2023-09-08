import './App.css';
import Header from './components/Header.jsx'
import TempDash from './components/TempDash.jsx'
import WeatherInfo from './components/WeatherInfo.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container border mt-4">
        <div className="row justify-content-center">
          <div className="col-4">
            <TempDash />
          </div>
          <div className="col-4 row align-items-center">
            <WeatherInfo/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;