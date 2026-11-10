import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="container home">
      <section className="hero">
        <div className="hero-text">
          <span className="categoria">O futuro está aqui</span>
          <h1>Tecnologia que conecta você ao futuro.</h1>
          <p>
            Encontre os melhores produtos tecnológicos com qualidade,
            inovação e preços especiais.
          </p>
          <Link to="/produtos" className="button link-button">
            Explorar produtos
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900"
            alt="Equipamentos tecnológicos sobre uma mesa"
          />
        </div>
      </section>

      <section className="benefits">
        <h2>Por que escolher a TechStore?</h2>
        <div className="benefit-grid">
          <article>
            <h3>Qualidade</h3>
            <p>Produtos selecionados para você.</p>
          </article>
          <article>
            <h3>Inovação</h3>
            <p>As últimas novidades da tecnologia.</p>
          </article>
          <article>
            <h3>Confiança</h3>
            <p>Uma experiência simples e segura.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;