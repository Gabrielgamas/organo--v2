import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaboradores";
import "./times.css";

const Times = ({ colaboradores, times, aoDeletar, mudarCor }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="times"
        style={{ backgroundColor: hexToRgba(times.cor, 0.4) }}
      >
        <input
          type="color"
          className="input-cor"
          value={times.cor}
          onChange={(evento) => {
            mudarCor(evento.target.value, times.id);
          }}
        />
        <h3 style={{ borderColor: times.cor }}>{times.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => (
            <Colaborador
              colaborador={colaborador}
              key={indice}
              corDeFundo={times.cor}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Times;
