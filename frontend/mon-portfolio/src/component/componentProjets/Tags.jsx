import React from 'react';

const Outils = ({ outils }) => {
    const outilsArray = Array.isArray(outils) ? outils : []; // Vérification de tableau

    return (
        <div id="infoOutils">
            <div id="outils">
                <h2>Outils principaux utilisés</h2>
                {outilsArray.length > 0 ? (
                    outilsArray.map((outil, index) => (
                        <span key={index} className="compétenceAlign">{outil}</span>
                    ))
                ) : (
                    <p>Aucun outil disponible.</p>
                )}
            </div>
        </div>
    );
};

export default Outils;