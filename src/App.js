import logo from "./logo.svg";
import "./App.css";
import CustomHookCheck from "./CustomHookCheck";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CustomHookCheck />
      </header>
    </div>
  );
}

export default App;
