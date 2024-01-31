import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <ParkingList />
      <Stats />
    </div>
  );
}

function Header() {
  return <h1>🌴 Go Far Away 💼</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="form">
      <h3>What do you need for the trip?</h3>
      <select>
        <option>1</option>
      </select>
      <input
        type="text"
        placeholder="text..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </div>
  );
}
function ParkingList() {}
function Stats() {}

export default App;
