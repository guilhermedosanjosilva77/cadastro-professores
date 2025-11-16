import "./App.css";
import Cadastrar from "./Pages/Cadastrar";
import Home from "./Pages/Home";
import Pesquisar from "./Pages/Pesquisa"; // sua lista de cadastros
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />

        {/* Página de cadastro */}
        <Route path="/Cadastro" element={<Cadastrar />} />

        {/* Página de lista dos cadastros*/}
        <Route path="/Pesquisa" element={<Pesquisar />} />
      </Routes>
    </div>
  );
}

export default App;
