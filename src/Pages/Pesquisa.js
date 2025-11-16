import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListaCadastros() {
  const [cadastros, setCadastros] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("cadastros")) || [];
    setCadastros(dados);
  }, []);

  return (
    <div style={{ margin: "20px" }}>
      <h1>Lista de Cadastros</h1>

      <button onClick={() => navigate("/")}>Voltar</button>

      <br /><br />

      {cadastros.length === 0 ? (
        <p>Nenhum cadastro encontrado.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cadastros.map((item, index) => (
            <li
              key={index}
              style={{
                background: "#f2f2f2",
                marginBottom: "15px",
                padding: "15px",
                borderRadius: "8px"
              }}
            >
              <h3>{item.nome}</h3>
              <p><b>CPF:</b> {item.cpf}</p>
              <p><b>Formação:</b> {item.formacao}</p>
              <p><b>Email:</b> {item.email}</p>
              <p><b>Telefone:</b> {item.telefone}</p>

              <h4>Endereço</h4>
              <p><b>Logradouro:</b> {item.endereco.logradouro}</p>
              <p><b>Complemento:</b> {item.endereco.complemento}</p>
              <p><b>Cidade:</b> {item.endereco.cidade}</p>
              <p><b>CEP:</b> {item.endereco.cep}</p>
              <p><b>UF:</b> {item.endereco.uf}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaCadastros;
