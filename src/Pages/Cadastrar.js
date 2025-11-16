import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Cadastrar() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [formacao, setFormacao] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [uf, setUf] = useState("");

  const Enviar = (e) => {
    e.preventDefault();

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

    // salva no localStorage
    const cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];
    cadastros.push(dadosCadastro);
    localStorage.setItem("cadastros", JSON.stringify(cadastros));

    // feedback pro usuário
    alert("Cadastro realizado com sucesso!");

    // limpa campos
    setNome("");
    setCpf("");
    setFormacao("");
    setEmail("");
    setTelefone("");
    setLogradouro("");
    setComplemento("");
    setCidade("");
    setCep("");
    setUf("");

    // ← ← ← AQUI: redireciona para a página da lista (Pesquisa)
    navigate("/Pesquisa");
  };

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div style={{ margin: "20px" }}>
      <form onSubmit={Enviar}>
        <h1>Faça o cadastro</h1>
        <br />

        <h2>Dados Pessoais</h2>
        <label>
          Nome Completo:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          CPF:
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Formação:
          <input
            type="text"
            value={formacao}
            onChange={(e) => setFormacao(e.target.value)}
          />
        </label>
        <br />

        <h2>Contatos</h2>
        <label>
          Email Institucional:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Telefone Celular:
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </label>
        <br />

        <h2>Endereço Residencial</h2>
        <label>
          Logradouro:
          <input
            type="text"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
          />
        </label>
        <br />

        <label>
          Complemento:
          <input
            type="text"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </label>
        <br />

        <label>
          Cidade:
          <input
            type="text"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          CEP:
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </label>
        <br />

        <label>
          UF:
          <input
            type="text"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
            maxLength="2"
          />
        </label>
        <br />

        <button type="submit">Enviar</button>

        {/* type="button" para não submeter o form */}
        <button type="button" onClick={goToHome} style={{ marginLeft: "10px" }}>
          Voltar
        </button>
      </form>
    </div>
  );
}

export default Cadastrar;
