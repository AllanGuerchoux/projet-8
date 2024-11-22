import React from 'react';
import { Link } from 'react-router-dom';
const NavBottom = () => {
    return (
        <nav className='navFooter'>
            <Link to="/">Accueil</Link>
            <Link to="/projets">Projets</Link>
            <Link to="/a-propos">À propos</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
};

export default NavBottom;