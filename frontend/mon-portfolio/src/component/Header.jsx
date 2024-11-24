import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour basculer l'état du menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' :''}`}>
      <div className="header-name">
        <h1>Allan Guerchoux</h1>
      </div>

      {/* Navbar pour desktop */}
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/">Accueil</Link>
            <a href='/#Formation'>Formation</a>
            <a href='/#projets'>Réalisation</a>
            <a href='/#contactContainer'>Contacte</a>
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