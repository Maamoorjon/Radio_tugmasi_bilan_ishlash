import "./styles.css";
import { useState } from "react";

export default function App() {
  const [fruit, setFruit] = useState("olma");
  const FRUITS_COLLECTION = ["olma", "banan", "olcha"];

  return (
    <div className="App">
      <h1>Radio tugmasi bilan ishlash</h1>
      {FRUITS_COLLECTION.map((val) => {
        return (
          <label key={val}>
            <input
              type="radio"
              value={val}
              checked={fruit === val}
              onChange={(e) => setFruit(e.target.value)}
            />
            {val}
          </label>
        );
      })}
      <h3>
        Men <span>{fruit}</span>ni yaxshi ko'raman.
      </h3>
    </div>
  );
}
