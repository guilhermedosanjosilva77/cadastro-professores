import './App.css';
import Cadastrar from './Pages/Cadastrar';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cadastro" element={<Cadastrar />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
