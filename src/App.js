import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <Weather defaultCity="Amsterdam" />
        <footer>
          This project was created by Viktoriia Baburkina and is{" "}
          <a
            href="https://github.com/ToriCodesVB/weather-react"
            target="_blank"
            rel="noreferrer">
            opened-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
