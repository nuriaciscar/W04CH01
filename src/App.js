import "./App.css";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Controls from "./Components/Controls";

function App() {
  return (
    <div className="container">
      <Header />
      <Controls />
      <Main />
    </div>
  );
}

export default App;
