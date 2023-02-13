import "./listaSuspensa.css";

const ListaSuspensa = (props) => {
  const itens = props.itens;
  return (
    <div className="listaSuspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.aoAlterado(evento.target.value)}
        required={props.obrigatorio}
        value={props.valor}
      >
        <option value="" key="Vazio"></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
