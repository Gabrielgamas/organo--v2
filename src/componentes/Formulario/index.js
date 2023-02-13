import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";

const Formulario = (props) => {
  const [nome, setnome] = useState("");
  const [cargo, setcargo] = useState("");
  const [imagem, setimagem] = useState("");
  const [time, settime] = useState("");
  const [nomeTime, setnomeTime] = useState("");
  const [corTime, setcorTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    });

    setnome("");
    setcargo("");
    setimagem("");
    settime("");
  };

  return (
    <section className="formulario">
      <form className="formulario-colaborador" onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setnome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setcargo(valor)}
        />
        <Campo
          valor={imagem}
          aoAlterado={(valor) => setimagem(valor)}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
          valor={time}
          aoAlterado={(valor) => settime(valor)}
          obrigatorio={true}
          label="Time"
          itens={props.times}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form
        className="formulario-time"
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setnomeTime(valor)}
        />
        <Campo
          obrigatorio={true}
          type="color"
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setcorTime(valor)}
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
