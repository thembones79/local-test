import { useState } from "react";
import { getStorage, setStorage } from "./utils/storage";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const storedCount = getStorage("count") as number;
  const [count, setCount] = useState(storedCount || 0);
  const onClick = () => {
    setStorage("count", count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClick}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
