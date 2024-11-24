import React from 'react';

const APropos = () => {
    return (
        <section id='Formation'>
            <h2>Ma Formation</h2>
            <div className='descriptionFormation'>
            <p>j'ai suivi la formation diplomante <strong>Développeur Web</strong> chez Openclassrooms</p>
            <div></div>
            <p>Dans cette formation j'ai pu voir ces différent point</p>
           <ul className='listeFormation'>
                <li className='elementListe'>Construire un site web responsive et dynamique</li>
                <li className='elementListe'>Créer des API et des bases de données</li>
                <li className='elementListe'>Optimiser les performances et réaliser la maintenance de sites web déjà existants</li>
                <li className='elementListe'>Gérer un projet web de A à Z</li>
            </ul>
            <div className='liensFormation'>
            <a href='https://openclassrooms.com/fr/paths/899-developpeur-web'>Lien vers la formation</a>
            <a href='https://www.francecompetences.fr/recherche/rncp/38145/'>Lien vers la certification professionelle</a>
            </div>
            </div>
           </section>
    );
};

export default APropos;