import './css/normalize.css';
import './css/App.css';

import { PlanetList } from "./components/PlanetList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Star Wars Planet List</h1>
      </header>
      <PlanetList />
    </div>
  );
}

export default App;
