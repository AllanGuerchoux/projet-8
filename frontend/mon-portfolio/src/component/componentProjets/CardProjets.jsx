import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../../fichierJSON/fichierCardJSON.json'
const CardProjets = () => {
    return (
        <section id='projets'>
            <h2 className='h2Realisation'>Réalisations</h2>
            <div className='cardWrapper'>
        {Data.map(item => (
            <div className='cardProjet' key={item.id}>
                <Link to={`/Projets/${item.id}`} className='cardLink'>
                    <h3 className='cardTitre'>{item.title}</h3>
                    <img className='imgCardAccueil' src={item.picture} alt={item.title} />
                </Link>
            </div>
        ))}
        </div>
    </section>
);
};


export default CardProjets;