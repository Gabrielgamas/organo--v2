import "./rodape.css";

const Rodape = () => {
  return (
    <section className="rodape">
      <div className="rodapeIcon">
        <a href="facebook.com" target="_blank">
          <img src="/imagens/fb.png" alt="#"></img>
        </a>
        <a href="twitter.com" target="_blank">
          <img src="/imagens/ig.png" alt="#"></img>
        </a>
        <a href="instagram.com" target="_blank">
          <img src="/imagens/tw.png" alt="#"></img>
        </a>
      </div>
      <img className="logo" src="/imagens/logo.png" alt="#"></img>
      <p>Desenvolvido por Gamas</p>
    </section>
  );
};

export default Rodape;
