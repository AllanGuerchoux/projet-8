import React from 'react';
import data from '../fichierJSON/fichierCardJSON.json'
const CardProjets = () => {
    return (
        <div className='cardContainer'>
            {data.map((item)=>
            <a href={item.lienGitHub} target='_blank' rel='noopener noreferrer' className='card' key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                {item.picture.length > 0 && (
                    <img src={item.picture[0]} alt={item.title}/>
                )}  
            </a>)}
        </div>
    );
};

export default CardProjets;