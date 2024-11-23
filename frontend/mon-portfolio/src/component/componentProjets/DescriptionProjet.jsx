import React from "react";

const DescriptionProjet = ({ description }) => {
  return (
        <div className="DescriptionProjet textProjetAlign">
            <h2 >Description</h2>
           <p className="compétenceAlign">{description}</p>
      </div>
    
    );
};

export default DescriptionProjet;