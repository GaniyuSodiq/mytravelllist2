import logo from "./logo.svg";
import "./App.css";

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

function Form() {}
function ParkingList() {}
function Stats() {}

export default App;
