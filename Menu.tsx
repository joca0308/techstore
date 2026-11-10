import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu" aria-label="Navegação principal">
      <NavLink to="/">Início</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </nav>
  );
}

export default Menu;