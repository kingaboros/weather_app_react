import './App.css';



//Components
import Weather from './components/Weather';


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="app__header">
              
        </header>

          <Weather /> 


        <footer> 
          <p> This project was created by{ " " }
            <a href="https://kngboros-dev.com/" target="_blank">Kinga Boros</a> and is { " " }
            <a href="https://github.com/kingaboros/weather_app_react.git" target="_blank"> open sourced on GitHub </a>
          </p>
        </footer>
      </div>
    </div>
  );
}


