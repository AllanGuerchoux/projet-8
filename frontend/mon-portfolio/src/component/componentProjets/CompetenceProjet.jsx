import React from "react";

const DescriptionCompétence = ({ compétence }) => {
  const outilsArray = Array.isArray(compétence) ? compétence : []; // Vérification de tableau

  return (
      <div className="compétenceListe textProjetAlign">
          
              <h2>Compétences</h2>
              {outilsArray.length > 0 ? (
                  outilsArray.map((compétence, index) => (
                      <span key={index} className="compétenceAlign">{compétence}</span>
                  ))
              ) : (
                  <p>Aucun outil disponible.</p>
              )}
          
      </div>
  );
};

export default DescriptionCompétence;


