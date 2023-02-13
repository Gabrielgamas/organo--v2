import { useState } from "react";
import Banner from "./componentes/banner/banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Times from "./componentes/Times";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#D9F7E9",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#E8F8FF",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#F0F8E2",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#FDE7E8",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#FAE9F5",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFF5D9",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FFEEDF",
    },
  ]);

  const [colaboradores, setcolaboradores] = useState([]);

  const deletarColaborador = (id) => {
    setcolaboradores((colaboradoresAtuais) =>
      colaboradoresAtuais.filter((colaborador) => colaborador.id !== id)
    );
  };

  const mudarCorDoTime = (cor, id) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  const cadastrarTime = (novoTime) => {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        aoCadastrar={(colaborador) => {
          setcolaboradores([...colaboradores, colaborador]);
        }}
        times={times.map((times) => times.nome)}
      />
      {times.map((times) => (
        <Times
          key={times.nome}
          times={times}
          mudarCor={mudarCorDoTime}
          aoDeletar={deletarColaborador}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === times.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
