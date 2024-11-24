import React from 'react';
import Data from '../fichierJSON/fichierCardJSON.json';
import { useParams } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import DescriptionProjet from '../component/componentProjets/DescriptionProjet';
import Outils from '../component/componentProjets/Tags';
import CompetenceProjet from '../component/componentProjets/CompetenceProjet';
import ProjetInfo from '../component/componentProjets/ProjetInfo';
import Images from '../component/componentProjets/Images';
import '../styles/index.css'
const Projets = () => {
    const { id } = useParams(); // Appel correct de useParams()
    const logement = Data.find(item => item.id === id); // Recherche dans le tableau JSON

    // Gestion si logement est undefined
    if (!logement) {
        return <div>Projet introuvable</div>;
    }

    return (
        <div >
            <Header /> 
            <main >
                
            <section className='sectionPrincipaleProjet'>
                <ProjetInfo 
                    title={logement.title} 
                />
                <Images 
                    picture={logement.picture}
                    alt={logement.title}
                />
               <DescriptionProjet 
               description ={logement.description}/>
                <CompetenceProjet
                    compétence={logement.compétence || "Non spécifié"} // Valeur par défaut si manquant
                />

                <Outils 
                    outils={logement.outils || "Aucun outil spécifié"} // Valeur par défaut
                    
                />
                <a className='pushDown' href={logement.lienGitHub}>lien vers le Repo Github</a>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Projets;
