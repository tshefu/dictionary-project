import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          This project was coded by Viktoria Schneider and is open-sourced on{" "}
          {""}
          <a
            href="https://github.com/tshefu/dictionary-project"
            target="_blank"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
