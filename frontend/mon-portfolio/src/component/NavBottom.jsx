import React from 'react';
import { Link } from 'react-router-dom';
const NavBottom = () => {
    return (
        <nav className='navFooter'>
            <Link to="/">Accueil</Link>
            <a href='#Formation'>Formation</a>
            <a href='#projets'>Réalisation</a>
            <a href='#contactContainer'>Contacte</a>
        </nav>
    );
};

export default NavBottom;