import './App.css';
import Header from './components/Header.jsx'
import TempDash from './components/TempDash.jsx'
import WeatherInfo from './components/WeatherInfo.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container d-flex justify-content-center border mt-4">
        <div className="row">
          <div className="col">
            <TempDash />
          </div>
          <div className="col">
            <WeatherInfo/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;