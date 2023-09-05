import './App.css';
import Header from './components/Header.jsx'
import TempDash from './components/TempDash.jsx'
import WeatherInfo from './components/WeatherInfo.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <TempDash />
      <WeatherInfo/>
    </div>
  );
}

export default App;