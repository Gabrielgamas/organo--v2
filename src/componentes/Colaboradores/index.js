import { AiOutlineClose } from "react-icons/ai";
import "./colaboradores.css";

const Colaborador = ({ corDeFundo, aoDeletar, colaborador }) => {
  return (
    <div className="colaborador">
      <AiOutlineClose
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="descricao">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? "favorito" : "nao favorito"}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
