import { useState } from "react";

function Cadastrar() {
  const [nome, setNome] = useState(" ");
  const [cpf, setCpf] = useState(" ");
  const [formacao, setFormacao] = useState(" ");
  const [email, setEmail] = useState("");
  const [telefone, setTelfone] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [uf, setUf] = useState("");

  const dadosCadastro = {
    nome,
    cpf,
    formacao,
    email,
    telefone,
    endereco: {
      logradouro,
      complemento,
      cidade,
      cep,
      uf,
    },
  };

  //Chamado quando enviar o formulario
  const Enviar = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <h1>Faça o cadastro</h1>
        <br></br>
        <h2>Dados Pessoais</h2>
        <label>
          Nome Completo:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          CPF:
            <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </label>

        <label>
          Formação
          <input
          type="text"
          value={formacao}
           onChange={(e) => setFormacao(e.target.value)}
          
          />
        </label>
        <br />

        <h1>Contatos</h1>
        <label>
          Email Institucional<input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
          
          />
        </label>
        <label>
          Telefone Celular
          <input
          type=""
          
          />
        </label>

        <h1>Endereço Residencial</h1>
        <label>
          Logradouro<input></input>
        </label>
        <label>
          Complemento<input></input>
        </label>
        <label>
          Cidade<input></input>
        </label>
        <label>
          CEP<input></input>
        </label>
        <label>
          UF<input></input>
        </label>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default Cadastrar;
