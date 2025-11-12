import React, { useEffect, useState } from "react";

function Pesquisar() {
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("cadastros")) || [];
    setCadastros(dados);
  }, []);
  

  return (
    <div style={{ margin: "20px" }}>
      <h1>Itens Cadastrados</h1>

      {cadastros.length === 0 ? (
        <p>Nenhum cadastro encontrado.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Formação</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Cidade</th>
              <th>UF</th>
            </tr>
          </thead>
          <tbody>
            {cadastros.map((pessoa, index) => (
              <tr key={index}>
                <td>{pessoa.nome}</td>
                <td>{pessoa.cpf}</td>
                <td>{pessoa.formacao}</td>
                <td>{pessoa.email}</td>
                <td>{pessoa.telefone}</td>
                <td>{pessoa.endereco.cidade}</td>
                <td>{pessoa.endereco.uf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Pesquisar;
