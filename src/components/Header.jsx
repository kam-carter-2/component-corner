import "./Header.css";

function Header({ storeName }) {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="store-name">{storeName}</h1>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;