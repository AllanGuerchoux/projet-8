import React from 'react';
import Présentation from '../component/Présentation';
import CardProjets from '../component/componentProjets/CardProjets';
const MainAcceuil = () => {
    return (
        <main>
            <Présentation />
            <CardProjets />
        </main>
    );
};

export default MainAcceuil;