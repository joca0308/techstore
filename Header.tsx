import Menu from "./Menu";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <a className="logo" href="/" aria-label="TechStore - página inicial">
          Tech<span>Store</span>
        </a>
        <Menu />
      </div>
    </header>
  );
}

export default Header;