import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="container page not-found">
      <h1>404</h1>
      <h2>Página não encontrada!</h2>
      <p>A página que você procura não existe.</p>
      <Link to="/" className="button link-button">Voltar ao início</Link>
    </main>
  );
}

export default NotFound;