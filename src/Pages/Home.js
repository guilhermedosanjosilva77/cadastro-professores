import react from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function GoToPage(){
    navigate(`/Cadastro`)
  }

  return (
    <div>
      <h1>Seja muito bem vindo </h1>
      <h2>O que você deseja acessar?</h2>
      <button onClick={GoToPage}>Cadastrar</button>
      <button>Pesquisar</button>
    </div>
  );
}
export default Home;
