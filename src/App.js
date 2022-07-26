import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="HeaderTitle">DICTIONARY</h1>
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
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
