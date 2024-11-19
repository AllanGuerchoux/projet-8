import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/*import './Header.css'; */

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-name">
        <h1>Allan Guerchoux</h1>
      </div>

      {/* Navbar pour desktop */}
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/">Accueil</Link>
        <Link to="/projets">Projets</Link>
        <Link to="/a-propos">À propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Burger Menu pour mobile */}
      <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
      </div>
    </header>
  );
}

export default Header;