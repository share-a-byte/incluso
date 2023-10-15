import './App.css';
import { Route, Routes } from "react-router-dom";
import HomeScreen from './HomeScreen';
import GraphsScreen from './graphs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/visualize" element={<GraphsScreen />} />
      </Routes>
    </div>
  );
}

export default App;
