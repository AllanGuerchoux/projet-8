import React from 'react';
import Présentation from '../component/Présentation';
import CardProjets from '../component/componentProjets/CardProjets';
import APropos from './APropos';
const MainAcceuil = () => {
    return (
        <main>
            <Présentation />
            <APropos />
            <CardProjets />
        </main>
    );
};

export default MainAcceuil;