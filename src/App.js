import "./App.css";
import ChildA from "./components/ContextApiWithHooks/ChildA";
import A from "./components/ContextWithClass/A";
import Component1 from "./components/ContextWithClass/Component1";

function App() {
  return (
    <div className="App">
      <A />
      <hr />
      <Component1 />
      <hr />
      <ChildA />
    </div>
  );
}

export default App;
